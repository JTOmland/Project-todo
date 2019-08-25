vsapp.controller('NewActionController', NewActionController)

NewActionController.$inject = ['$scope', '$mdDialog', 'dialogLocals', 'OperationService', 'BrokerService'];


function NewActionController($scope, $mdDialog, dialogLocals, OperationService, BrokerService) {

    //variables used to build scroller 
    $scope.selectedYear = 0;
    $scope.years = [];
    $scope.items = [];
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var currentYear = new Date().getFullYear();
    var currentMonth = new Date().getMonth();
    var previousYear = -1;
    var previousMonth = -1;
    $scope.contexts = [];
    $scope.selectedContext = undefined;
    $scope.selectedProject = undefined;

    $scope.getSelectedContext = function() {
        console.log("inside get selectedContext", $scope.selectedContext) 
        if($scope.selectedContext) {
            console.log("returning context")
            
            return $scope.selectedContext;
        } else {
            console.log('returning no context')
            return 'Context';
        }
    }

    $scope.getSelectedProject = function() {
        if($scope.selectedProject) {
            $scope.action.project = $scope.selectedProject;
            return $scope.action.project;
        } else {
            console.log('returning no context')
            return 'Project';
        }
    }
    $scope.originalItem = {};
    if (dialogLocals.action) {
        $scope.originalItem = dialogLocals.action;
        $scope.action = dialogLocals.action;
        console.log("dialoglocals", dialogLocals, "action",$scope.action)

    } else {
        console.log("dialoglocals", dialogLocals);
    }
    if (dialogLocals.projects) {
        $scope.projects = dialogLocals.projects;
        console.log("setting projects", $scope.projects);
    }
    if (dialogLocals.contexts) {
        $scope.contexts = dialogLocals.contexts;
        console.log("setting contexts", $scope.contexts);

    }
    
    $scope.closeEdit = function () {
        $mdDialog.hide($scope.originalItem);
    }

    $scope.createAction = function () {
        $mdDialog.hide($scope.action);
    }

    $scope.editAction = function () {
        // console.log("before dialogLocal.product", dialogLocals.product, $scope.product)
        // dialogLocals.product = angular.copy($scope.product)
        // console.log("after dialogLocal.product", dialogLocals.product, $scope.product)

        $mdDialog.hide($scope.action);
    }


    if (!dialogLocals.mode == 'createModel') {
        //this builds the information used for the scroller years and months
    }


    function convertDate(year, month) {
        //item.month and item.year
        month++;
        var buildDateString = month;
        buildDateString += " 1, ";
        buildDateString += year;
        buildDateString += " 00:00:00";
        return new Date(buildDateString);
    }

};