vsapp.controller('InBoxController', InBoxController)

InBoxController.$inject = ['$scope', '$mdDialog', '$mdToast', '$q', '$timeout', '$log', 'OperationService'];


function InBoxController($scope, $mdDialog, $mdToast, $q, $timeout, $log, OperationService) {

    //not sure if I will use these or not.  the simulate query can be removed but for now I think auto-complete needs a promise returned
    $scope.simulateQuery = false;
    $scope.isDisabled = false;

    //temp data to debug
    $scope.actions = [
        {
            'type': 'project',
            'process': 'parrallel',
            'title': '24J spec review',
            'inputs': [],
            'status': 'active',
            'due': '',
            'defer': '',
            'context': '@work',
            'project': '24J cast station',
            'note': '',
            'completed': false,
            'tasktime': '',
            'recures': ''
        },
        {
            'type': 'action',
            'process': 'parrallel',
            'title': 'call American Family',
            'inputs': [],
            'status': 'active',
            'due': '',
            'defer': '',
            'context': '@phone',
            'project': 'Purchase Nest Thermostat',
            'note': '',
            'completed': false,
            'tasktime': '',
            'recures': ''
        },
        {
            'type': 'action',
            'process': 'parrallel',
            'title': 'Make a birthday list',
            'inputs': [],
            'status': 'active',
            'due': '',
            'defer': '',
            'context': '',
            'project': 'Improve relationships',
            'note': '',
            'completed': false,
            'tasktime': '',
            'recures': ''
        },
        {
            'type': 'action',
            'process': 'parrallel',
            'title': 'A new action to check scroll',
            'inputs': [],
            'status': 'active',
            'due': '',
            'defer': '',
            'context': '',
            'project': 'Some new project',
            'note': '',
            'completed': false,
            'tasktime': '',
            'recures': ''
        },
        {
            'type': 'action',
            'process': 'parrallel',
            'title': 'A new action aato check scroll',
            'inputs': [],
            'status': 'active',
            'due': '',
            'defer': '',
            'context': '',
            'project': 'Some new project2',
            'note': '',
            'completed': false,
            'tasktime': '',
            'recures': ''
        },
        {
            'type': 'action',
            'process': 'parrallel',
            'title': 'A new action toaction 3 check scroll',
            'inputs': [],
            'status': 'active',
            'due': '',
            'defer': '',
            'context': '',
            'project': 'Some new project three',
            'note': '',
            'completed': false,
            'tasktime': '',
            'recures': ''
        },
        {
            'type': 'action',
            'process': 'parrallel',
            'title': 'A new action toaction 4 check scroll',
            'inputs': [],
            'status': 'active',
            'due': '',
            'defer': '',
            'context': '',
            'project': 'Some new project four',
            'note': '',
            'completed': false,
            'tasktime': '',
            'recures': ''
        },
        {
            'type': 'action',
            'process': 'parrallel',
            'title': 'A new action toaction 5 check scroll',
            'inputs': [],
            'status': 'active',
            'due': '',
            'defer': '',
            'context': '',
            'project': 'Some new project five',
            'note': '',
            'completed': false,
            'tasktime': '',
            'recures': ''
        },
        {
            'type': 'action',
            'process': 'parrallel',
            'title': 'A new action toaction 6 check scroll',
            'inputs': [],
            'status': 'active',
            'due': '',
            'defer': '',
            'context': '',
            'project': 'Some new project six',
            'note': '',
            'completed': false,
            'tasktime': '',
            'recures': ''
        },
        {
            'type': 'action',
            'process': 'parrallel',
            'title': 'A new action toaction 7 check scroll',
            'inputs': [],
            'status': 'active',
            'due': '',
            'defer': '',
            'context': '',
            'project': 'Some new project seven',
            'note': '',
            'completed': false,
            'tasktime': '',
            'recures': ''
        },
        {
            'type': 'action',
            'process': 'parrallel',
            'title': 'A new action toaction 7 check scroll',
            'inputs': [],
            'status': 'active',
            'due': '',
            'defer': '',
            'context': '',
            'project': 'Some new project 8',
            'note': '',
            'completed': false,
            'tasktime': '',
            'recures': ''
        },
        {
            'type': 'action',
            'process': 'parrallel',
            'title': 'A new action toaction 7 check scroll',
            'inputs': [],
            'status': 'active',
            'due': '',
            'defer': '',
            'context': '',
            'project': 'Some new project 9',
            'note': '',
            'completed': false,
            'tasktime': '',
            'recures': ''
        },
        {
            'type': 'action',
            'process': 'parrallel',
            'title': 'A new action toaction 7 check scroll',
            'inputs': [],
            'status': 'active',
            'due': '',
            'defer': '',
            'context': '',
            'project': 'Some new project 10',
            'note': '',
            'completed': false,
            'tasktime': '',
            'recures': ''
        },
        {
            'type': 'action',
            'process': 'parrallel',
            'title': 'A new action toaction 7 check scroll',
            'inputs': [],
            'status': 'active',
            'due': '',
            'defer': '',
            'context': '',
            'project': 'Some new project 11',
            'note': '',
            'completed': false,
            'tasktime': '',
            'recures': ''
        },
        {
            'type': 'action',
            'process': 'parrallel',
            'title': 'A new action toaction 7 check scroll',
            'inputs': [],
            'status': 'active',
            'due': '',
            'defer': '',
            'context': '',
            'project': 'Some new project 12',
            'note': '',
            'completed': false,
            'tasktime': '',
            'recures': ''
        },
        {
            'type': 'action',
            'process': 'parrallel',
            'title': 'A new action toaction 7 check scroll',
            'inputs': [],
            'status': 'active',
            'due': '',
            'defer': '',
            'context': '',
            'project': 'Some new project 13 which has a really long name to see if the thing will expand to fit',
            'note': '',
            'completed': false,
            'tasktime': '',
            'recures': ''
        }
    ]

    $scope.contexts = [];
    $scope.projects = [];

    $scope.newContext = function (context) {
        alert("you added a new context" + context);
    }

    $scope.newProject = function (project) {
        alert("you added a new project")
    }

    $scope.contextSearch = function (contextQuery) {
        var results = contextQuery ? $scope.contexts.filter(createContextFilter(contextQuery)) : [];
        console.log("simulateQuery value", $scope.simulateQuery)
        // var deferred;
        // if ($scope.simulateQuery) {
        //     deferred = $q.defer();
        //     $timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);
        //     return deferred.promise;
        // } else {
        //     return results;
        // }
        return results;

    }

    $scope.projectSearch = function (projectQuery) {
        //console.log("projects", $scope.projects, projectQuery);
        //console.log("createContextFilter returns", createContextFilter(projectQuery));
        //console.log("result of function test", $scope.projects[0].indexOf('24J'))
        var results = projectQuery ? $scope.projects.filter(createContextFilter(projectQuery)) : [];
        //console.log("in projectSearch", results);
        var deferred;
        if ($scope.simulateQuery) {
            deferred = $q.defer();
            $timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);
            return deferred.promise;
        } else {
            return results;
        }

    }

    $scope.searchContextChange = function (text) {
        console.log('Text for context changed to ' + text);
    }

    $scope.selectedContextChange = function (context, action) {
        $log.info('Item changed to ' + JSON.stringify(context) + ' ' + JSON.stringify(action));
        // if (context) {
        //     action.context = context.display;
        // }
    }

    $scope.selectedProjectChange = function (context, action) {
        $log.info('Item changed to ' + JSON.stringify(context) + ' ' + JSON.stringify(action));
        // if (context) {
        //     action.context = context.display;
        // }
    }


    //build a filter for the searchquery.  Sends a function back to use in filter to find case insensitive matches
    function createContextFilter(contextQuery) {
        var lowercaseQuery = contextQuery.toLowerCase();
        console.log("createContextFilter lowercaseQuery", lowercaseQuery);

        return function filterFn(item) {
            return (item.toLowerCase().indexOf(lowercaseQuery) === 0);
        };
    }


    $scope.addAction = function () {
        console.log('add action');
        var action = {
            type: 'action',
            process: 'parrallel',
            title: '',
            inputs: [],
            status: 'active',
            due: Date.now(),
            defer: Date.now(),
            context: 'No Context',
            project: 'No Project',
            note: '',
            completed: false,
            tasktime: 5, //tasktime in minutes?
            recures: false,
            status: 'Active',  //Active, Not Available
            desire: 'Empty',
            value: 5,
            priority: 1,
            urgent: false,
            important: true,
            flagged: true,
            delayedCount: 0
        }
        var items = {
            action: action,
            projects: $scope.projects,
            contexts: $scope.contexts

        }

        $mdDialog.show({
            controller: 'NewActionController',
            templateUrl: '/partials/NewAction',
            clickOutsideToClose: true,
            fullscreen: false,
            panelClass: 'action-panel',
            dialogLocals: items,
        }).then(function (newAction) {
            console.log("returned from dialog and action is ", newAction);
            if(newAction) {
                $scope.actions.push(newAction);
            }
        });
    }

    //init temp goes through actions and builds arrays for projects and contexts
    function init() {
        _.each($scope.actions, function (action) {
            if (action.project) {
                if (!_.includes($scope.projects, action.project)) {
                    $scope.projects.push(action.project);
                }
            }
            if (action.context) {
                if (!_.includes($scope.contexts, action.context)) {
                    $scope.contexts.push(action.context);
                }
            }
        });

        console.log("initial projects and contexts", $scope.projects, $scope.contexts)
        OperationService.getAOR().then(function (response) {
            console.log("response from load outputs", response);
            $scope.routes = [];
            _.each(response.data, function (output) {
                if (output.BaseUsage) {
                    $scope.routes.push(output._id);
                } else {
                    $scope.routes.push(output);
                }
            });
            console.log("$scope.routes after getAOR", $scope.routes);
            $scope.test = {
                type: 'AOR',
                process: 'parrallel',
                title: 'Test new schema',
                inputs: [],
                status: 'active',
                due: Date.now(),
                defer: Date.now(),
                context: 'No Context',
                project: 'No Project',
                note: '',
                completed: false,
                tasktime: 5, //tasktime in minutes?
                recures: false,
                status: 'Active',  //Active, Not Available
                desire: 'Empty',
                value: 5,
                priority: 1,
                urgent: false,
                important: true,
                flagged: true,
                delayedCount: 0
            }
            // OperationService.updateComponent($scope.test).then(function (response) {
            //     console.log("test save of new component schema", response.data);
            // });

        });

    }
    init();

    $scope.$on('openNewAction', function(){
        console.log('received broker message to open')
        $scope.addAction();
    })



};