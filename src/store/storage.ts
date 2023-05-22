import { defineStore } from 'pinia'

export const useStorageStore = defineStore({
  id: 'storage',
  state: () => {
    return {
      choosedClassId: ''
    }
  },
  getters: {
    // 选中的分类Id
    choosedClassIdGet: state => state.choosedClassId
  },
  actions: {
    setChoosedClassId(classId: string) {
      this.choosedClassId = classId
    },
    clearChoosedClassId() {
      this.choosedClassId = ''
    }
  }
})
