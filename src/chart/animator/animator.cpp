#include "animator.h"

#include "base/io/log.h"
#include "chart/generator/selector.h"

using namespace Vizzu;
using namespace Vizzu::Anim;
using namespace std::chrono;

Animator::Animator() : ::Anim::Control(static_cast<Planner&>(*this))
{
	source = nullptr;
}

void Animator::init(Diag::DiagramPtr diagram)
{
	if (!source) {
		source = std::move(diagram);
		source->detachOptions();

		::Anim::Control::setOnChange([&]
		{
			if (onDraw) onDraw(actual);
		});

		::Anim::Control::setOnFinish([&] { finish(); });
	}
}

void Animator::animate(const Diag::DiagramPtr &diagram,
    OnFinished onThisFinished)
{
	if (isRunning()) throw std::logic_error("animation already in progress");
	if (!diagram) return;

	diagram->detachOptions();

	init(diagram);
	target = diagram;
	if (onThisFinished) onFinished.attach(onThisFinished, true);
	Diag::Selector(*target).copySelectionFrom(*source);
	target->detachOptions();
	prepareActual();
	createPlan(*source, *target, *actual);
	::Anim::Control::reset();
	::Anim::Control::play();
}

void Animator::finish()
{
	source = targetCopy ? targetCopy : target;
	actual.reset();
	target.reset();
	targetCopy.reset();
	onFinished();
}

void Animator::prepareActual()
{
	auto options =
	    std::make_shared<Diag::DiagramOptions>(*source->getOptions());

	actual = std::make_shared<Diag::Diagram>(options, *source);

	if(Diag::Diagram::dimensionMatch(*source, *target))
	{
		for (auto i = source->getMarkers().size();
			i < target->getMarkers().size();
			i++)
		{
			auto srcItem = target->getMarkers()[i];
			srcItem.enabled = false;
			source->markers.push_back(srcItem);
		}

		for (auto i = target->getMarkers().size();
		     i < source->getMarkers().size();
		     i++)
		{
			if (!targetCopy) copyTarget();
			auto trgItem = source->getMarkers()[i];
			trgItem.enabled = false;
			target->markers.push_back(trgItem);
		}
	}
	else
	{
		copyTarget();

		auto sourceSize = source->getMarkers().size();

		for (auto &marker: target->markers)
			marker.setIdOffset(sourceSize);

		source->markers.insert(source->markers.end(),
			target->getMarkers().begin(), target->getMarkers().end());

		target->markers = source->getMarkers();

		for (auto i = 0u; i < source->getMarkers().size(); i++)
		{
			auto &marker = (i < sourceSize ? target : source)->markers[i];
			marker.enabled = false;
		}
	}
	actual->markers = source->getMarkers();
}

void Animator::copyTarget()
{
	targetCopy = target;
	target = std::make_shared<Diag::Diagram>(*targetCopy);
	target->detachOptions();
}
