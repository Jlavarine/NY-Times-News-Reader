describe('Application Testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should be able to visit the site', () => {
    cy.visit('http://localhost:3000/')
  })

  it('Should be able to see the title, filter options, and at least one article on the page', () => {
    cy.get('.title').should('have.text', 'NY-Times Reader')
    cy.get('.filter-options > :nth-child(1)').should('have.text', 'All')
    cy.get('.filter-options > :nth-child(2)').should('have.text', 'Business')
    cy.get('.filter-options > :nth-child(3)').should('have.text', 'Opinion')
    cy.get('.filter-options > :nth-child(4)').should('have.text', 'US')
    cy.get('.filter-options > :nth-child(5)').should('have.text', 'World')
    cy.get('.articles-container > :nth-child(1)').should('exist')
  })  

  it('Each article should have a picture, a title, and a show more button', () => {
    cy.get('.articles-container > :nth-child(1)').should('exist')
    cy.get(':nth-child(1) > .article-image').should('exist')
    cy.get(':nth-child(1) > .article-image').should('exist')
    cy.get(':nth-child(1) > .card-title > a > button').should('exist')
  })

  it('Should be able to navigate to the details page from the article', () => {
    cy.get(':nth-child(1) > .card-title > a > button').click()
    cy.get('.details-title').should('exist')
    cy.get('.details-abstract').should('exist')
    cy.get('.details-byline').should('exist')
    cy.get('.details-link').should('exist')
    cy.get('.details-homepage-button').should('exist')
  })

  it('Should be able to navigate back to the homepage', () => {
    cy.get(':nth-child(1) > .card-title > a > button').click()
    cy.get('.details-homepage-button').click()
    cy.url('http://localhost:3000/')
  })

  it('Should direct to a 404 page if the url doesnt match', () => {
    cy.visit('http://localhost:3000/potato')
    cy.get('.fof-header').should('have.text', `Our editor hasn't finished completing that story...`)
    cy.get('.fof-image').should('have.attr', 'src').should('contain', 'https://i.gifer.com/1F6.gif')
    cy.get('.fof-return-text').should('have.text','Click here to return to the main page.' )
    cy.get('a').click()
    cy.url('http://localhost:3000/')
  })
})