/// <reference types='cypress' />

import { TodoPage } from "../pages/todo-page"

describe('todo actions',() => {
    const todoPage = new TodoPage
    beforeEach(() =>{
        todoPage.navigate()
        todoPage.addTodo("Clean room")
    })

    it("should be able to add new todo to the list", () => {
        todoPage.assertTodoText("Clean room")
        todoPage.isTheTodoNotChecked()
    })
    
    it('should mark a todo in the list as completed',() => {
        todoPage.selectTodoRadioButton()
        todoPage.isTheTodoTxtStrikeThrough()  
    })
    
    it('should clear a conpleted todo',() => {
        todoPage.selectTodoRadioButton()
        todoPage.clickOnFilter("Clear completed")
        todoPage.isTheTodoListEmpty()
    })
})
