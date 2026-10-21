---
'@astryxdesign/core': patch
---

[fix] useFocusTrap: leave a Tab that starts outside the trap to the page (#7687)

While a `Popover` with `isModal={false}` was open, a Tab pressed anywhere on the page moved focus into the popover, because `useFocusTrap` marked every Tab as keyboard navigation before checking where focus was. The trap now only handles a Tab that starts inside its container (or on the container itself). Containment for focus already inside the layer is unchanged.

Behavior change: a modal popover opened with `hasAutoFocus={false}` is no longer entered by a Tab from its trigger; that Tab now moves to the next control in the page.

@yimhanbi
