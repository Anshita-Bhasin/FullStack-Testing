describe("API Test using cypress", () => {
  it("test api - GET ", () => {
    cy.request("GET", "https://reqres.in/api/users?page=2").should((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
