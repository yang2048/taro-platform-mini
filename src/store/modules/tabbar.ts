import { defineStore } from 'pinia';

const useTabbar = defineStore({
  /** 区分不通状态的唯一标识 */
  id: 'tabbar',
  /** 状态 */
  state: () => ({
    selected: 0,
  }),
  actions: {
    setSelected(index: number) {
      this.selected = index;
    },
  },
});
export { useTabbar };
