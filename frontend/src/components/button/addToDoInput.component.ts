import { Component } from '@angular/core';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'add-to-do-input',
  standalone: true,
  imports: [HlmInputDirective, HlmButtonDirective],
  template: `
    <div class="flex w-full md:max-w-sm max-w-full items-center space-x-2 h-fit">
      <input
        aria-label="Email"
        class="md:w-80 w-full h-full grow rounded-xl bg-white"
        hlmInput
        type="text"
        placeholder="To Do"
      />
      <button hlmBtn class=" rounded-xl  min-w-fit">Add To Do</button>
    </div>
  `,
})
export class InputButtonComponent {}
