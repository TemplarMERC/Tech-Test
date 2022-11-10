describe('This is going to test the petstore api user section', () => {
  it('Will create user and test the response', () => {
    cy.request({
        method: 'POST',
        url: ' https://petstore.swagger.io/v2/user',
        body: {
            id: 109238,
            username: "Dtest",
            firstName: "David",
            lastName: "Johnson",
            email: "David@test.com",
            password: "password",
            phone: "00000000000",
            userStatus: 0
        }
    }).then( response => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq("109238")
    });
  })
  it('Will get the created user and test the repsonse', () => {
    cy.request({
        method: 'GET',
        url: 'https://petstore.swagger.io/v2/user/Dtest'
    }).then( response => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(109238);
        expect(response.body.username).to.eq('Dtest');
        expect(response.body.firstName).to.eq('David');
        expect(response.body.lastName).to.eq('Johnson');
        expect(response.body.email).to.eq('David@test.com');
        expect(response.body.password).to.eq('password');
        expect(response.body.phone).to.eq('00000000000');
        expect(response.body.userStatus).to.eq(0)
    })
  })
  it('Will update the created user and test the response and also get the user to make sure the updates we actually made', () => {
    cy.request({
        method: 'PUT',
        url: 'https://petstore.swagger.io/v2/user/Dtest',
        body: {
            id: 109238,
            username: "Dtest",
            firstName: "David",
            lastName: "Johnson",
            email: "David@test.com",
            password: "password1",
            phone: "00000000001",
            userStatus: 0
        }
    }).then( response => {
        expect(response.status).to.eq(200);
    })
    cy.request({
        method: 'GET',
        url: 'https://petstore.swagger.io/v2/user/Dtest',
    }).then( response => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(109238);
        expect(response.body.username).to.eq('Dtest');
        expect(response.body.firstName).to.eq('David');
        expect(response.body.lastName).to.eq('Johnson');
        expect(response.body.email).to.eq('David@test.com');
        expect(response.body.password).to.eq('password1');
        expect(response.body.phone).to.eq('00000000001');
        expect(response.body.userStatus).to.eq(0)
    });
  });
  it('Will delete the created user and test the response while also getting the user to make sure it has been deleted', () => {
    cy.request({
        method: 'DELETE',
        url: 'https://petstore.swagger.io/v2/user/Dtest',
    }).then( response => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq('Dtest');
    })
    cy.request({
        method: 'GET',
        url: 'https://petstore.swagger.io/v2/user/Dtest',
        failOnStatusCode: false
    }).then( response => {
        expect(response.status).to.eq(404);
        expect(response.body.message).to.eq('User not found');
    })
  })
})
describe('This will test the petstore api pet section', () => {
  it('Will add a new pet to the store and test the response', () => {
    cy.request({
        method: 'POST',
        url: 'https://petstore.swagger.io/v2/pet',
        body: {
            id: 13,
            catagory: {
                id: 0,
                name: 'string'
            },
            name: 'buddy',
            photoUrls: ['string'],
            tags: [
                {
                    id: 0,
                    name: 'string'
                }
            ],
            status: 'available'  
        }
    }).then( response => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(13);
        expect(response.body.name).to.eq('buddy');
        expect(response.body.photoUrls[0]).to.eq('string');
        expect(response.body.tags[0].id).to.eq(0);
        expect(response.body.tags[0].name).to.eq('string');
    })
  })
  it('Will get the pet we just created and verify the response', () => {
    cy.request({
        method: 'GET',
        url: 'https://petstore.swagger.io/v2/pet/13',
    }).then( response => {
        expect(response.status).to.eq(200)
        expect(response.body.id).to.eq(13)
        expect(response.body.name).to.eq('buddy');
        expect(response.body.photoUrls[0]).to.eq('string')
        expect(response.body.tags[0].id).to.eq(0);
        expect(response.body.tags[0].name).to.eq('string');
    })
  })
  it('Will edit the pet we have created and verify the response and that the pet has been edited', () => {
    cy.request({
        method: 'PUT',
        url: 'https://petstore.swagger.io/v2/pet',
        body: {
            id: 13,
            catagory: {
                id: 0,
                name: 'string'
            },
            name: 'buddy',
            photoUrls: ['is a good boy'],
            tags: [
                {
                    id: 0,
                    name: 'string'
                }
            ],
            status: 'available'  
        }
    }).then( response => {
        expect(response.status).to.eq(200)
        expect(response.body.id).to.eq(13)
        expect(response.body.name).to.eq('buddy');
        expect(response.body.photoUrls[0]).to.eq('is a good boy')
        expect(response.body.tags[0].id).to.eq(0);
        expect(response.body.tags[0].name).to.eq('string');
    })
  })
  it('Will delete the pet we have created and verify the pet has been deleted', () => {
    cy.request({
        method: 'DELETE',
        url: 'https://petstore.swagger.io/v2/pet/13',
    }).then( response => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq('13')
    });
    cy.request({
        method: 'GET',
        url: 'https://petstore.swagger.io/v2/pet/13',
        failOnStatusCode: false
    }).then( response => {
        expect(response.status).to.eq(404)
        expect(response.body.message).to.eq('Pet not found');
    });
  });
});