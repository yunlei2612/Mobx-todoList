import { action, computed, observable, runInAction } from 'mobx'

class TodoStore {
  @observable todos = []
  @observable isLoading = false

  // 添加任务
  @action.bound todoAdd (weight) {
    this.isLoading = true
    setTimeout(()=>{
      runInAction(()=>{
        this.todos.push({
          index: this.todos.length + 1 ,
          weight,
          isEatUp: false
        })
        this.isLoading = false
      })
    }, 1500)
    
  }

  @action.bound  todoSatusChange (index,  flag) {
    this.todos[index-1].isEatUp = flag
  }

  @computed get filterTodos () {
    return this.todos.filter(apple => apple.isEatUp === false)
  }

  @computed get unEatUpsWeight () {
    return this.filterTodos.reduce((sum, item) => {
      return sum += item.weight
    }, 0)
  }

  @computed get eatUpCount () {
    return this.todos.filter(apple => apple.isEatUp === true)
  }

  @computed get eatUpWeight () {
    return this.eatUpCount.reduce((sum, item) => {
      return sum += item.weight
    }, 0)
  }
}

export default new TodoStore()