// Copyright (c) Meta Platforms, Inc. and affiliates.

import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {useRef} from 'react';
import {Popover} from './Popover';

function Page() {
  const anchor = useRef<HTMLButtonElement>(null);
  return (
    <div>
      <button ref={anchor} type="button">
        Anchor
      </button>
      <Popover
        anchorRef={anchor}
        isOpen
        isModal={false}
        hasLightDismiss={false}
        hasAutoFocus={false}
        label="Details"
        content={<button type="button">Inside</button>}
      />
      <button type="button">Elsewhere 1</button>
      <button type="button">Elsewhere 2</button>
    </div>
  );
}

describe('non-modal Popover and Tab elsewhere on the page', () => {
  it('leaves a Tab pressed outside the popover to the page', async () => {
    const user = userEvent.setup();
    render(<Page />);
    screen.getByRole('button', {name: 'Elsewhere 1'}).focus();
    await user.tab();
    expect(screen.getByRole('button', {name: 'Elsewhere 2'})).toHaveFocus();
  });
});
