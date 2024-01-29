import './layout.html';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';


Template.dashboardLayout.events({
    'click #logoutBtn' (event, template) {
        event.preventDefault();
        Meteor.logout(() => {
            FlowRouter.go('login');
        })
    }
})