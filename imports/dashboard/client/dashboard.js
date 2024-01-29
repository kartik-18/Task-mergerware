import './dashboard.html';

Template.dashboard.helpers({
  isAdmin() {
    return Meteor.user()?.profile?.role == "admin";
  },
  isLender() {
    return Meteor.user()?.profile?.role == "lender";
  },
  isBorrower() {
    return Meteor.user()?.profile?.role == "borrower";
  },
});

Template.dashboard.events({
    'submit #roleForm' (event, template) {
        event.preventDefault();

        const role = $("#role").val();

        if (!role) {
            alert('Please select role!');
            return false;
        }

        Meteor.call("assignRoleToUser", role, (error, result) => {
            if (error) {
                alert(error.reason);
            }
          
        })
    }
})