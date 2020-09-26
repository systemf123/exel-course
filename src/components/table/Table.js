import {ExelComponent} from '@/core/ExelComponent';
import {createTable} from './table.template'
import {resizeHandler} from '@/components/table/table.resize';
import {shouldResize} from '@/components/table/table.functions';

export class Table extends ExelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
       listeners: ['mousedown']
    })
  }

  toHTML() {
    return createTable(20)
  }

  onMousedown(event) {
    /* eslint-disable no-debugger */
    if (shouldResize()) {
      resizeHandler(this.$root, event)
    }
  }
}
