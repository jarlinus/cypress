export class TodoPage{
    navigate(){
        cy.visit("https://todomvc-app-for-testing.surge.sh/")
    }

    addTodo(todoTxt){
        cy.get('.new-todo').type(todoTxt+"{enter}")
    }

    clickOnFilter(filterType){
        cy.contains(filterType).click()
    }

    assertTheNumberOfTodosListed(numberOfTodos){
        cy.get('.todo-list li').should('have.length', numberOfTodos)
    }

    assertTodoText(todoTxt){
        cy.get('label').should('have.text',todoTxt)
    }

    isTheTodoNotChecked(){
        cy.get('.toggle').should('not.be.checked')
    }

    selectTodoRadioButton(){
        cy.get('.toggle').click()
    }

    isTheTodoTxtStrikeThrough(){
        cy.get('label').should('have.css','text-decoration-line','line-through')
    }

    isTheTodoListEmpty(){
        cy.get('.todo-list').should('not.have.descendants','li')
    }

    selectSecondTodoRadioButton(){
        cy.get('.todo-list li:nth-child(2) .toggle').click()
    }
}