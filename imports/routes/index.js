import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import "../layout/layout";

// Home Route
FlowRouter.route("/", {
  name: "login",
  action(params, queryParams) {
    BlazeLayout.render("layout", { main: "login" });
  },
});

FlowRouter.route("/sign-up", {
  name: "registration",
  action(params, queryParams) {
    BlazeLayout.render("layout", { main: "registration" });
  },
});

FlowRouter.route("/dashboard", {
  name: "dashboard",
  action(params, queryParams) {
    if (Meteor.userId()) {
      BlazeLayout.render("dashboardLayout", { main: "dashboard" });
    } else {
      FlowRouter.go("login");
    }
  },
});

FlowRouter.route("/loans", {
  name: "loans",
  action(params, queryParams) {
    if (Meteor.userId()) {
      BlazeLayout.render("dashboardLayout", { main: "loans" });
    } else {
      FlowRouter.go("login");
    }
  },
});

FlowRouter.route("/new-loan", {
  name: "requestLoan",
  action(params, queryParams) {
    if (Meteor.userId()) {
      BlazeLayout.render("dashboardLayout", { main: "requestLoan" });
    } else {
      FlowRouter.go("login");
    }
  },
});

FlowRouter.route("/payments", {
  name: "payments",
  action(params, queryParams) {
    if (Meteor.userId()) {
      BlazeLayout.render("dashboardLayout", { main: "payments" });
    } else {
      FlowRouter.go("login");
    }
  },
});
