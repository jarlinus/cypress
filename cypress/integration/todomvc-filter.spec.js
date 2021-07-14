/// <reference types='cypress' />

import { TodoPage } from "../pages/todo-page"

describe('filter',() =>{
    const todoPage = new TodoPage
    beforeEach(() => {
        todoPage.navigate()
        todoPage.addTodo("Clean room")
        todoPage.addTodo("Learn JavaScript")
        todoPage.addTodo("Use Cypress")
        todoPage.selectSecondTodoRadioButton()
    })
    
    it('should filter "Active" todos',() =>{
        todoPage.clickOnFilter("Active")
        todoPage.assertTheNumberOfTodosListed("2")
    })
    
    it('should filter "Completed" todos',() =>{
        todoPage.clickOnFilter("Completed")
        todoPage.assertTheNumberOfTodosListed("1")
    })

    it('should filter "All" todos',() =>{
        todoPage.clickOnFilter("All")
        todoPage.assertTheNumberOfTodosListed("3")
    })
})