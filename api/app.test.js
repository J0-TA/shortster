/* eslint-disable no-undef */
/* eslint-disable import/no-dynamic-require */
import request from "supertest";
import app from "./index";
import setup from "./config/test-setup";

describe("Sort code", () => {
  describe("POST new shortcode", () => {
    it("creates new shortcode", (done) => {
      request(app)
        .post("/")
        .send({ url: "https://movingworlds.org/" })
        .send({ shortcode: "ed4mW5" })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .end((err) => {
          if (err) return done(err);
          done();
        });
    });
  });

  describe("GET Shortcode Stats", () => {
    it("retrieves shortcode stats", (done) => {
      request(app)
        .get("/ed4mW5/stats")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .end((err) => {
          if (err) return done(err);
          done();
        });
    });
  });

  describe("GET Redirect Shortcode", () => {
    it("redirects to URL", (done) => {
      request(app)
        .get("/ed4mW5")
        .set("Accept", "application/json")
        .expect(302)
        .end((err) => {
          if (err) return done(err);
          done();
        });
    });
  });

  after(async () => {
    // Clears DB after every test
    await setup.dropAllCollections;

    //   Closes DB connection
    await setup.closeAllConnections();
  });
});
