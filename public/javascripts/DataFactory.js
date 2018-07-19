angular
    .module('vsapp')
    .factory('DataFactory', DataFactory);

DataFactory.$inject = ['idFactory'];
function DataFactory(idFactory) {
    var service = {
        getTimePeriods: getTimePeriods,
        demandModel: demandModel,
        siteModel: siteModel,
        workCenterModel: workCenterModel,
        productModel: productModel,
        processModel: processModel,
        fullModel: fullModel,
        processSteps: processSteps,
        addPeriods: addPeriods,
        buildOperationsWorkcenters: buildOperationsWorkcenters
    };
    var processSteps = [];
    var dataModel = {
        "ModelName": "Test1",
        "CPModelItems": 
            {
                "CPModelID": 151,
                "CPModelName": "FMSCO Test1",
                "CPModelDescription": "Test of COAL for setup as a capacity model for FMSCO as a potential replacement for current excel ba",
                "IsSourceOfTruth": 0,
                "LastModified": "3/8/2016 1:49:12 PM",
                "UOM": "Square Meter Sold",
                "PlanningMethod": 0,
                "PeriodStart": new Date('January 1, 2016 00:00:00'),
                "LastID": 0
            },
        "RegionModelItems": [
            {
                "CPModelID": 151,
                "RegionID": 348,
                "RegionName": "Japan",
                "RegionDescription": ""
            }
        ],
        "SiteModelItems": [
            {
                "CPModelID": 151,
                "SiteID": 1044,
                "SiteName": "Coating",
                "SiteType": "Existing",
                "IsIncluded": 1,
                "RegionID": 344
            },
            {
                "CPModelID": 151,
                "SiteID": 1045,
                "SiteName": "Micro-replication",
                "SiteType": "Existing",
                "IsIncluded": 1,
                "RegionID": 344
            },
            {
                "CPModelID": 151,
                "SiteID": 1046,
                "SiteName": "PET Film Making",
                "SiteType": "Existing",
                "IsIncluded": 1,
                "RegionID": 344
            },
            {
                "CPModelID": 151,
                "SiteID": 1049,
                "SiteName": "Converting",
                "SiteType": "Existing",
                "IsIncluded": 1,
                "RegionID": 348
            },
            {
                "CPModelID": 151,
                "SiteID": 1051,
                "SiteName": "Jumbo Slitting",
                "SiteType": "Existing",
                "IsIncluded": 1,
                "RegionID": 348
            }
        ],
        "WorkCenterModelItems": [
            {
                "SiteID": 1044,
                "WorkCenterID": 752,
                "WorkCenterName": "Enterprse",
                "IsIncluded": 1,
                "WorkCenterType": "Existing"
            },
            {
                "SiteID": 1044,
                "WorkCenterID": 753,
                "WorkCenterName": "Voyager",
                "IsIncluded": 1,
                "WorkCenterType": "Existing"
            },
            {
                "SiteID": 1044,
                "WorkCenterID": 754,
                "WorkCenterName": "SG4",
                "IsIncluded": 1,
                "WorkCenterType": "Existing"
            },
            {
                "SiteID": 1044,
                "WorkCenterID": 755,
                "WorkCenterName": "Coater 26",
                "IsIncluded": 1,
                "WorkCenterType": "Existing"
            },
            {
                "SiteID": 1044,
                "WorkCenterID": 756,
                "WorkCenterName": "Coater 27",
                "IsIncluded": 1,
                "WorkCenterType": "Existing"
            },
            {
                "SiteID": 1044,
                "WorkCenterID": 757,
                "WorkCenterName": "SG2",
                "IsIncluded": 1,
                "WorkCenterType": "Existing"
            },
            {
                "SiteID": 1045,
                "WorkCenterID": 758,
                "WorkCenterName": "MRC6",
                "IsIncluded": 1,
                "WorkCenterType": "Existing"
            },
            {
                "SiteID": 1045,
                "WorkCenterID": 759,
                "WorkCenterName": "MRC7",
                "IsIncluded": 1,
                "WorkCenterType": "Existing"
            },
            {
                "SiteID": 1045,
                "WorkCenterID": 760,
                "WorkCenterName": "MRC8",
                "IsIncluded": 1,
                "WorkCenterType": "Existing"
            },
            {
                "SiteID": 1045,
                "WorkCenterID": 761,
                "WorkCenterName": "MRC9",
                "IsIncluded": 1,
                "WorkCenterType": "Existing"
            },
            {
                "SiteID": 1046,
                "WorkCenterID": 762,
                "WorkCenterName": "G1",
                "IsIncluded": 1,
                "WorkCenterType": "Existing"
            },
            {
                "SiteID": 1046,
                "WorkCenterID": 763,
                "WorkCenterName": "G2",
                "IsIncluded": 1,
                "WorkCenterType": "Existing"
            },
            {
                "SiteID": 1046,
                "WorkCenterID": 764,
                "WorkCenterName": "G3",
                "IsIncluded": 1,
                "WorkCenterType": "Existing"
            },
            {
                "SiteID": 1046,
                "WorkCenterID": 765,
                "WorkCenterName": "D7",
                "IsIncluded": 1,
                "WorkCenterType": "Existing"
            },
            {
                "SiteID": 1046,
                "WorkCenterID": 766,
                "WorkCenterName": "D8",
                "IsIncluded": 1,
                "WorkCenterType": "Existing"
            },
            {
                "SiteID": 1049,
                "WorkCenterID": 767,
                "WorkCenterName": "APAC Converting",
                "IsIncluded": 1,
                "WorkCenterType": "Existing"
            },
            {
                "SiteID": 1051,
                "WorkCenterID": 770,
                "WorkCenterName": "3A",
                "IsIncluded": 1,
                "WorkCenterType": "Existing"
            }
        ],
        "CustomerModelItems": [
            {
                "CPModelID": 151,
                "CustomerID": 1047,
                "CustomerName": "DMSD",
                "CustomerType": "Customer",
                "IsIncluded": 1,
                "RegionID": 348
            },
            {
                "CPModelID": 151,
                "CustomerID": 1048,
                "CustomerName": "Renewable",
                "CustomerType": "Customer",
                "IsIncluded": 0,
                "RegionID": 348
            }
        ],
        "PeriodModelItems": [
            {
                "CPModelID": 151,
                "PeriodID": 1775,
                "PeriodName": "2016-M-01",
                "PeriodStart": "1/1/2016 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1776,
                "PeriodName": "2016-M-02",
                "PeriodStart": "2/1/2016 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1778,
                "PeriodName": "2016-M-03",
                "PeriodStart": "3/1/2016 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1779,
                "PeriodName": "2016-M-04",
                "PeriodStart": "4/1/2016 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1780,
                "PeriodName": "2016-M-05",
                "PeriodStart": "5/1/2016 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1781,
                "PeriodName": "2016-M-06",
                "PeriodStart": "6/1/2016 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1782,
                "PeriodName": "2016-M-07",
                "PeriodStart": "7/1/2016 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1783,
                "PeriodName": "2016-M-08",
                "PeriodStart": "8/1/2016 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1784,
                "PeriodName": "2016-M-09",
                "PeriodStart": "9/1/2016 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1785,
                "PeriodName": "2016-M-10",
                "PeriodStart": "10/1/2016 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1786,
                "PeriodName": "2016-M-11",
                "PeriodStart": "11/1/2016 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1787,
                "PeriodName": "2016-M-12",
                "PeriodStart": "12/1/2016 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1788,
                "PeriodName": "2017-M-01",
                "PeriodStart": "1/1/2017 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1789,
                "PeriodName": "2017-M-02",
                "PeriodStart": "2/1/2017 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1790,
                "PeriodName": "2017-M-03",
                "PeriodStart": "3/1/2017 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1791,
                "PeriodName": "2017-M-04",
                "PeriodStart": "4/1/2017 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1792,
                "PeriodName": "2017-M-05",
                "PeriodStart": "5/1/2017 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1793,
                "PeriodName": "2017-M-06",
                "PeriodStart": "6/1/2017 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1794,
                "PeriodName": "2017-M-07",
                "PeriodStart": "7/1/2017 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1795,
                "PeriodName": "2017-M-08",
                "PeriodStart": "8/1/2017 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1796,
                "PeriodName": "2017-M-09",
                "PeriodStart": "9/1/2017 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1797,
                "PeriodName": "2017-M-10",
                "PeriodStart": "10/1/2017 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1798,
                "PeriodName": "2017-M-11",
                "PeriodStart": "11/1/2017 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1799,
                "PeriodName": "2017-M-12",
                "PeriodStart": "12/1/2017 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1800,
                "PeriodName": "2018-M-01",
                "PeriodStart": "1/1/2018 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1801,
                "PeriodName": "2018-M-02",
                "PeriodStart": "2/1/2018 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1802,
                "PeriodName": "2018-M-03",
                "PeriodStart": "3/1/2018 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1803,
                "PeriodName": "2018-M-04",
                "PeriodStart": "4/1/2018 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1804,
                "PeriodName": "2018-M-05",
                "PeriodStart": "5/1/2018 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1805,
                "PeriodName": "2018-M-06",
                "PeriodStart": "6/1/2018 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1806,
                "PeriodName": "2018-M-07",
                "PeriodStart": "7/1/2018 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1807,
                "PeriodName": "2018-M-08",
                "PeriodStart": "8/1/2018 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1808,
                "PeriodName": "2018-M-09",
                "PeriodStart": "9/1/2018 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1809,
                "PeriodName": "2018-M-10",
                "PeriodStart": "10/1/2018 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1810,
                "PeriodName": "2018-M-11",
                "PeriodStart": "11/1/2018 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1811,
                "PeriodName": "2018-M-12",
                "PeriodStart": "12/1/2018 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1812,
                "PeriodName": "2019-M-01",
                "PeriodStart": "1/1/2019 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1813,
                "PeriodName": "2019-M-02",
                "PeriodStart": "2/1/2019 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1814,
                "PeriodName": "2019-M-03",
                "PeriodStart": "3/1/2019 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1815,
                "PeriodName": "2019-M-04",
                "PeriodStart": "4/1/2019 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1816,
                "PeriodName": "2019-M-05",
                "PeriodStart": "5/1/2019 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1817,
                "PeriodName": "2019-M-06",
                "PeriodStart": "6/1/2019 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1818,
                "PeriodName": "2019-M-07",
                "PeriodStart": "7/1/2019 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1819,
                "PeriodName": "2019-M-08",
                "PeriodStart": "8/1/2019 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1820,
                "PeriodName": "2019-M-09",
                "PeriodStart": "9/1/2019 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1821,
                "PeriodName": "2019-M-10",
                "PeriodStart": "10/1/2019 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1822,
                "PeriodName": "2019-M-11",
                "PeriodStart": "11/1/2019 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1823,
                "PeriodName": "2019-M-12",
                "PeriodStart": "12/1/2019 12:00:00 AM"
            }, 
            {
                "CPModelID": 151,
                "PeriodID": 1836,
                "PeriodName": "2020-M-01",
                "PeriodStart": "1/1/2020 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1837,
                "PeriodName": "2020-M-02",
                "PeriodStart": "2/1/2020 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1838,
                "PeriodName": "2020-M-03",
                "PeriodStart": "3/1/2020 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1839,
                "PeriodName": "2020-M-04",
                "PeriodStart": "4/1/2020 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1840,
                "PeriodName": "2020-M-05",
                "PeriodStart": "5/1/2020 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1841,
                "PeriodName": "2020-M-06",
                "PeriodStart": "6/1/2020 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1842,
                "PeriodName": "2020-M-07",
                "PeriodStart": "7/1/2020 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1843,
                "PeriodName": "2020-M-08",
                "PeriodStart": "8/1/2020 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1844,
                "PeriodName": "2020-M-09",
                "PeriodStart": "9/1/2020 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1845,
                "PeriodName": "2020-M-10",
                "PeriodStart": "10/1/2020 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1846,
                "PeriodName": "2020-M-11",
                "PeriodStart": "11/1/2020 12:00:00 AM"
            },
            {
                "CPModelID": 151,
                "PeriodID": 1847,
                "PeriodName": "2020-M-12",
                "PeriodStart": "12/1/2020 12:00:00 AM"
            }
        ],
        "AvailableHoursModelItems": [
            {
                "CPModelID": 151,
                "AvailableHrsID": 2138,
                "SiteID": 1051,
                "WorkCenterID": 770,
                "PeriodID": 1778,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2139,
                "SiteID": 1051,
                "WorkCenterID": 770,
                "PeriodID": 1779,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2140,
                "SiteID": 1051,
                "WorkCenterID": 770,
                "PeriodID": 1780,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2141,
                "SiteID": 1051,
                "WorkCenterID": 770,
                "PeriodID": 1781,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2142,
                "SiteID": 1051,
                "WorkCenterID": 770,
                "PeriodID": 1782,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2143,
                "SiteID": 1051,
                "WorkCenterID": 770,
                "PeriodID": 1783,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2144,
                "SiteID": 1051,
                "WorkCenterID": 770,
                "PeriodID": 1784,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2145,
                "SiteID": 1051,
                "WorkCenterID": 770,
                "PeriodID": 1785,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2146,
                "SiteID": 1051,
                "WorkCenterID": 770,
                "PeriodID": 1786,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2147,
                "SiteID": 1051,
                "WorkCenterID": 770,
                "PeriodID": 1787,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2148,
                "SiteID": 1051,
                "WorkCenterID": 770,
                "PeriodID": 1788,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2149,
                "SiteID": 1051,
                "WorkCenterID": 770,
                "PeriodID": 1789,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2066,
                "SiteID": 1044,
                "WorkCenterID": 752,
                "PeriodID": 1778,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 40,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2067,
                "SiteID": 1044,
                "WorkCenterID": 752,
                "PeriodID": 1779,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 40,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2068,
                "SiteID": 1044,
                "WorkCenterID": 752,
                "PeriodID": 1780,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 40,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2069,
                "SiteID": 1044,
                "WorkCenterID": 752,
                "PeriodID": 1781,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 40,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2070,
                "SiteID": 1044,
                "WorkCenterID": 752,
                "PeriodID": 1782,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 40,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2071,
                "SiteID": 1044,
                "WorkCenterID": 752,
                "PeriodID": 1783,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 40,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2072,
                "SiteID": 1044,
                "WorkCenterID": 752,
                "PeriodID": 1784,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 40,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2073,
                "SiteID": 1044,
                "WorkCenterID": 752,
                "PeriodID": 1785,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 40,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2074,
                "SiteID": 1044,
                "WorkCenterID": 752,
                "PeriodID": 1786,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 40,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2075,
                "SiteID": 1044,
                "WorkCenterID": 752,
                "PeriodID": 1787,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 40,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2076,
                "SiteID": 1044,
                "WorkCenterID": 752,
                "PeriodID": 1788,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 40,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2077,
                "SiteID": 1044,
                "WorkCenterID": 752,
                "PeriodID": 1789,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 40,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2078,
                "SiteID": 1044,
                "WorkCenterID": 755,
                "PeriodID": 1778,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2079,
                "SiteID": 1044,
                "WorkCenterID": 755,
                "PeriodID": 1779,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2080,
                "SiteID": 1044,
                "WorkCenterID": 755,
                "PeriodID": 1780,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2081,
                "SiteID": 1044,
                "WorkCenterID": 755,
                "PeriodID": 1781,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2082,
                "SiteID": 1044,
                "WorkCenterID": 755,
                "PeriodID": 1782,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2083,
                "SiteID": 1044,
                "WorkCenterID": 755,
                "PeriodID": 1783,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2084,
                "SiteID": 1044,
                "WorkCenterID": 755,
                "PeriodID": 1784,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2085,
                "SiteID": 1044,
                "WorkCenterID": 755,
                "PeriodID": 1785,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2086,
                "SiteID": 1044,
                "WorkCenterID": 755,
                "PeriodID": 1786,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2087,
                "SiteID": 1044,
                "WorkCenterID": 755,
                "PeriodID": 1787,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2088,
                "SiteID": 1044,
                "WorkCenterID": 755,
                "PeriodID": 1788,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2089,
                "SiteID": 1044,
                "WorkCenterID": 755,
                "PeriodID": 1789,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2090,
                "SiteID": 1044,
                "WorkCenterID": 756,
                "PeriodID": 1778,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2091,
                "SiteID": 1044,
                "WorkCenterID": 756,
                "PeriodID": 1779,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2092,
                "SiteID": 1044,
                "WorkCenterID": 756,
                "PeriodID": 1780,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2093,
                "SiteID": 1044,
                "WorkCenterID": 756,
                "PeriodID": 1781,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2094,
                "SiteID": 1044,
                "WorkCenterID": 756,
                "PeriodID": 1782,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2095,
                "SiteID": 1044,
                "WorkCenterID": 756,
                "PeriodID": 1783,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2096,
                "SiteID": 1044,
                "WorkCenterID": 756,
                "PeriodID": 1784,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2097,
                "SiteID": 1044,
                "WorkCenterID": 756,
                "PeriodID": 1785,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2098,
                "SiteID": 1044,
                "WorkCenterID": 756,
                "PeriodID": 1786,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2099,
                "SiteID": 1044,
                "WorkCenterID": 756,
                "PeriodID": 1787,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2100,
                "SiteID": 1044,
                "WorkCenterID": 756,
                "PeriodID": 1788,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2101,
                "SiteID": 1044,
                "WorkCenterID": 756,
                "PeriodID": 1789,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2102,
                "SiteID": 1044,
                "WorkCenterID": 757,
                "PeriodID": 1778,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2103,
                "SiteID": 1044,
                "WorkCenterID": 757,
                "PeriodID": 1779,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2104,
                "SiteID": 1044,
                "WorkCenterID": 757,
                "PeriodID": 1780,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2105,
                "SiteID": 1044,
                "WorkCenterID": 757,
                "PeriodID": 1781,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2106,
                "SiteID": 1044,
                "WorkCenterID": 757,
                "PeriodID": 1782,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2107,
                "SiteID": 1044,
                "WorkCenterID": 757,
                "PeriodID": 1783,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2108,
                "SiteID": 1044,
                "WorkCenterID": 757,
                "PeriodID": 1784,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2109,
                "SiteID": 1044,
                "WorkCenterID": 757,
                "PeriodID": 1785,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2110,
                "SiteID": 1044,
                "WorkCenterID": 757,
                "PeriodID": 1786,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2111,
                "SiteID": 1044,
                "WorkCenterID": 757,
                "PeriodID": 1787,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2112,
                "SiteID": 1044,
                "WorkCenterID": 757,
                "PeriodID": 1788,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2113,
                "SiteID": 1044,
                "WorkCenterID": 757,
                "PeriodID": 1789,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2114,
                "SiteID": 1044,
                "WorkCenterID": 754,
                "PeriodID": 1778,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2115,
                "SiteID": 1044,
                "WorkCenterID": 754,
                "PeriodID": 1779,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2116,
                "SiteID": 1044,
                "WorkCenterID": 754,
                "PeriodID": 1780,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2117,
                "SiteID": 1044,
                "WorkCenterID": 754,
                "PeriodID": 1781,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2118,
                "SiteID": 1044,
                "WorkCenterID": 754,
                "PeriodID": 1782,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2119,
                "SiteID": 1044,
                "WorkCenterID": 754,
                "PeriodID": 1783,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2120,
                "SiteID": 1044,
                "WorkCenterID": 754,
                "PeriodID": 1784,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2121,
                "SiteID": 1044,
                "WorkCenterID": 754,
                "PeriodID": 1785,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2122,
                "SiteID": 1044,
                "WorkCenterID": 754,
                "PeriodID": 1786,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2123,
                "SiteID": 1044,
                "WorkCenterID": 754,
                "PeriodID": 1787,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2124,
                "SiteID": 1044,
                "WorkCenterID": 754,
                "PeriodID": 1788,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2125,
                "SiteID": 1044,
                "WorkCenterID": 754,
                "PeriodID": 1789,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2126,
                "SiteID": 1044,
                "WorkCenterID": 753,
                "PeriodID": 1778,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2127,
                "SiteID": 1044,
                "WorkCenterID": 753,
                "PeriodID": 1779,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2128,
                "SiteID": 1044,
                "WorkCenterID": 753,
                "PeriodID": 1780,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2129,
                "SiteID": 1044,
                "WorkCenterID": 753,
                "PeriodID": 1781,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2130,
                "SiteID": 1044,
                "WorkCenterID": 753,
                "PeriodID": 1782,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2131,
                "SiteID": 1044,
                "WorkCenterID": 753,
                "PeriodID": 1783,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2132,
                "SiteID": 1044,
                "WorkCenterID": 753,
                "PeriodID": 1784,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2133,
                "SiteID": 1044,
                "WorkCenterID": 753,
                "PeriodID": 1785,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2134,
                "SiteID": 1044,
                "WorkCenterID": 753,
                "PeriodID": 1786,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2135,
                "SiteID": 1044,
                "WorkCenterID": 753,
                "PeriodID": 1787,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2136,
                "SiteID": 1044,
                "WorkCenterID": 753,
                "PeriodID": 1788,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            },
            {
                "CPModelID": 151,
                "AvailableHrsID": 2137,
                "SiteID": 1044,
                "WorkCenterID": 753,
                "PeriodID": 1789,
                "HoursPerShift": 8,
                "ShiftsPerDay": 3,
                "DaysPerWeek": 5,
                "ChangeOver": 0,
                "Evaluation": 0,
                "Experiment": 0,
                "Preventative": 0,
                "Others": 0
            }
        ],
        "ProductModelItems": [
            {
                "CPModelID": 151,
                "ProductID": 992,
                "ProductName": "ASOC3",
                "ProductDescription": "",
                "SellingPrice": "40",
                "Currency": "USD",
                "Notes": "Test product",
                "IsIncluded": 1
            },
            {
                "CPModelID": 151,
                "ProductID": 993,
                "ProductName": "ASOC AMI",
                "ProductDescription": "",
                "SellingPrice": "42",
                "Currency": "USD",
                "Notes": "Test product2",
                "IsIncluded": 1
            },
            {
                "CPModelID": 151,
                "ProductID": 994,
                "ProductName": "Test",
                "ProductDescription": "",
                "SellingPrice": "4",
                "Currency": "USD",
                "Notes": "just a test",
                "IsIncluded": 1
            },
            {
                "CPModelID": 151,
                "ProductID": 996,
                "ProductName": "Durable Matte Prism(3 mil)",
                "ProductDescription": "",
                "SellingPrice": "10.00",
                "Currency": "USD",
                "Notes": "",
                "IsIncluded": 1
            },
            {
                "CPModelID": 151,
                "ProductID": 997,
                "ProductName": "HG Matte Prism 2 mil",
                "ProductDescription": "",
                "SellingPrice": "14",
                "Currency": "USD",
                "Notes": " Matte prism film with solvent coated matte layer",
                "IsIncluded": 1
            },
            {
                "CPModelID": 151,
                "ProductID": 998,
                "ProductName": "HG Trans Prism 3 mil",
                "ProductDescription": "",
                "SellingPrice": "14",
                "Currency": "USD",
                "Notes": "Prsim film using high gain resin and 3 mil PET",
                "IsIncluded": 1
            }
        ],
        "DemandModelItems": [
            {
                "DemandID": 7377,
                "CPModelID": 151,
                "ProductID": 997,
                "ProductName": "HG Matte Prism 2 mil",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1778,
                "DueDate": "2016-M-03",
                "Quantity": "4600"
            },
            {
                "DemandID": 7378,
                "CPModelID": 151,
                "ProductID": 997,
                "ProductName": "HG Matte Prism 2 mil",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1779,
                "DueDate": "2016-M-04",
                "Quantity": "5200"
            },
            {
                "DemandID": 7379,
                "CPModelID": 151,
                "ProductID": 997,
                "ProductName": "HG Matte Prism 2 mil",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1780,
                "DueDate": "2016-M-05",
                "Quantity": "4600"
            },
            {
                "DemandID": 7380,
                "CPModelID": 151,
                "ProductID": 997,
                "ProductName": "HG Matte Prism 2 mil",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1781,
                "DueDate": "2016-M-06",
                "Quantity": "8300"
            },
            {
                "DemandID": 7381,
                "CPModelID": 151,
                "ProductID": 997,
                "ProductName": "HG Matte Prism 2 mil",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1782,
                "DueDate": "2016-M-07",
                "Quantity": "6500"
            },
            {
                "DemandID": 7382,
                "CPModelID": 151,
                "ProductID": 997,
                "ProductName": "HG Matte Prism 2 mil",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1783,
                "DueDate": "2016-M-08",
                "Quantity": "3800"
            },
            {
                "DemandID": 7383,
                "CPModelID": 151,
                "ProductID": 997,
                "ProductName": "HG Matte Prism 2 mil",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1784,
                "DueDate": "2016-M-09",
                "Quantity": "7300"
            },
            {
                "DemandID": 7384,
                "CPModelID": 151,
                "ProductID": 997,
                "ProductName": "HG Matte Prism 2 mil",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1785,
                "DueDate": "2016-M-10",
                "Quantity": "5000"
            },
            {
                "DemandID": 7385,
                "CPModelID": 151,
                "ProductID": 997,
                "ProductName": "HG Matte Prism 2 mil",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1786,
                "DueDate": "2016-M-11",
                "Quantity": "4000"
            },
            {
                "DemandID": 7386,
                "CPModelID": 151,
                "ProductID": 997,
                "ProductName": "HG Matte Prism 2 mil",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1787,
                "DueDate": "2016-M-12",
                "Quantity": "5000"
            },
            {
                "DemandID": 7387,
                "CPModelID": 151,
                "ProductID": 997,
                "ProductName": "HG Matte Prism 2 mil",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1788,
                "DueDate": "2017-M-01",
                "Quantity": "4000"
            },
            {
                "DemandID": 7388,
                "CPModelID": 151,
                "ProductID": 997,
                "ProductName": "HG Matte Prism 2 mil",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1789,
                "DueDate": "2017-M-02",
                "Quantity": "5000"
            },
            {
                "DemandID": 7389,
                "CPModelID": 151,
                "ProductID": 998,
                "ProductName": "HG Trans Prism 3 mil",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1778,
                "DueDate": "2016-M-03",
                "Quantity": "20000"
            },
            {
                "DemandID": 7390,
                "CPModelID": 151,
                "ProductID": 998,
                "ProductName": "HG Trans Prism 3 mil",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1779,
                "DueDate": "2016-M-04",
                "Quantity": "25000"
            },
            {
                "DemandID": 7391,
                "CPModelID": 151,
                "ProductID": 998,
                "ProductName": "HG Trans Prism 3 mil",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1780,
                "DueDate": "2016-M-05",
                "Quantity": "20000"
            },
            {
                "DemandID": 7392,
                "CPModelID": 151,
                "ProductID": 998,
                "ProductName": "HG Trans Prism 3 mil",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1781,
                "DueDate": "2016-M-06",
                "Quantity": "22000"
            },
            {
                "DemandID": 7393,
                "CPModelID": 151,
                "ProductID": 998,
                "ProductName": "HG Trans Prism 3 mil",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1782,
                "DueDate": "2016-M-07",
                "Quantity": "25000"
            },
            {
                "DemandID": 7394,
                "CPModelID": 151,
                "ProductID": 998,
                "ProductName": "HG Trans Prism 3 mil",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1783,
                "DueDate": "2016-M-08",
                "Quantity": "20000"
            },
            {
                "DemandID": 7395,
                "CPModelID": 151,
                "ProductID": 998,
                "ProductName": "HG Trans Prism 3 mil",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1784,
                "DueDate": "2016-M-09",
                "Quantity": "25000"
            },
            {
                "DemandID": 7396,
                "CPModelID": 151,
                "ProductID": 998,
                "ProductName": "HG Trans Prism 3 mil",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1785,
                "DueDate": "2016-M-10",
                "Quantity": "20000"
            },
            {
                "DemandID": 7397,
                "CPModelID": 151,
                "ProductID": 998,
                "ProductName": "HG Trans Prism 3 mil",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1786,
                "DueDate": "2016-M-11",
                "Quantity": "25000"
            },
            {
                "DemandID": 7398,
                "CPModelID": 151,
                "ProductID": 998,
                "ProductName": "HG Trans Prism 3 mil",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1787,
                "DueDate": "2016-M-12",
                "Quantity": "22000"
            },
            {
                "DemandID": 7399,
                "CPModelID": 151,
                "ProductID": 998,
                "ProductName": "HG Trans Prism 3 mil",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1788,
                "DueDate": "2017-M-01",
                "Quantity": "25000"
            },
            {
                "DemandID": 7400,
                "CPModelID": 151,
                "ProductID": 998,
                "ProductName": "HG Trans Prism 3 mil",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1789,
                "DueDate": "2017-M-02",
                "Quantity": "15000"
            },
            {
                "DemandID": 7323,
                "CPModelID": 151,
                "ProductID": 992,
                "ProductName": "ASOC3",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1778,
                "DueDate": "2016-M-03",
                "Quantity": "291700"
            },
            {
                "DemandID": 7324,
                "CPModelID": 151,
                "ProductID": 992,
                "ProductName": "ASOC3",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1779,
                "DueDate": "2016-M-04",
                "Quantity": "290000"
            },
            {
                "DemandID": 7325,
                "CPModelID": 151,
                "ProductID": 992,
                "ProductName": "ASOC3",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1780,
                "DueDate": "2016-M-05",
                "Quantity": "100000"
            },
            {
                "DemandID": 7326,
                "CPModelID": 151,
                "ProductID": 992,
                "ProductName": "ASOC3",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1781,
                "DueDate": "2016-M-06",
                "Quantity": "400000"
            },
            {
                "DemandID": 7327,
                "CPModelID": 151,
                "ProductID": 992,
                "ProductName": "ASOC3",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1782,
                "DueDate": "2016-M-07",
                "Quantity": "500000"
            },
            {
                "DemandID": 7328,
                "CPModelID": 151,
                "ProductID": 992,
                "ProductName": "ASOC3",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1783,
                "DueDate": "2016-M-08",
                "Quantity": "800000"
            },
            {
                "DemandID": 7329,
                "CPModelID": 151,
                "ProductID": 992,
                "ProductName": "ASOC3",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1784,
                "DueDate": "2016-M-09",
                "Quantity": "200000"
            },
            {
                "DemandID": 7330,
                "CPModelID": 151,
                "ProductID": 992,
                "ProductName": "ASOC3",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1785,
                "DueDate": "2016-M-10",
                "Quantity": "300000"
            },
            {
                "DemandID": 7331,
                "CPModelID": 151,
                "ProductID": 992,
                "ProductName": "ASOC3",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1786,
                "DueDate": "2016-M-11",
                "Quantity": "300000"
            },
            {
                "DemandID": 7332,
                "CPModelID": 151,
                "ProductID": 992,
                "ProductName": "ASOC3",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1787,
                "DueDate": "2016-M-12",
                "Quantity": "400000"
            },
            {
                "DemandID": 7333,
                "CPModelID": 151,
                "ProductID": 992,
                "ProductName": "ASOC3",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1788,
                "DueDate": "2017-M-01",
                "Quantity": "450000"
            },
            {
                "DemandID": 7334,
                "CPModelID": 151,
                "ProductID": 992,
                "ProductName": "ASOC3",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1789,
                "DueDate": "2017-M-02",
                "Quantity": "300000"
            },
            {
                "DemandID": 7335,
                "CPModelID": 151,
                "ProductID": 993,
                "ProductName": "ASOC AMI",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1778,
                "DueDate": "2016-M-03",
                "Quantity": "200000"
            },
            {
                "DemandID": 7336,
                "CPModelID": 151,
                "ProductID": 993,
                "ProductName": "ASOC AMI",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1779,
                "DueDate": "2016-M-04",
                "Quantity": "180000"
            },
            {
                "DemandID": 7337,
                "CPModelID": 151,
                "ProductID": 993,
                "ProductName": "ASOC AMI",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1780,
                "DueDate": "2016-M-05",
                "Quantity": "50000"
            },
            {
                "DemandID": 7338,
                "CPModelID": 151,
                "ProductID": 993,
                "ProductName": "ASOC AMI",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1781,
                "DueDate": "2016-M-06",
                "Quantity": "400000"
            },
            {
                "DemandID": 7339,
                "CPModelID": 151,
                "ProductID": 993,
                "ProductName": "ASOC AMI",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1782,
                "DueDate": "2016-M-07",
                "Quantity": "200000"
            },
            {
                "DemandID": 7340,
                "CPModelID": 151,
                "ProductID": 993,
                "ProductName": "ASOC AMI",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1783,
                "DueDate": "2016-M-08",
                "Quantity": "340000"
            },
            {
                "DemandID": 7341,
                "CPModelID": 151,
                "ProductID": 993,
                "ProductName": "ASOC AMI",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1784,
                "DueDate": "2016-M-09",
                "Quantity": "220000"
            },
            {
                "DemandID": 7342,
                "CPModelID": 151,
                "ProductID": 993,
                "ProductName": "ASOC AMI",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1785,
                "DueDate": "2016-M-10",
                "Quantity": "200000"
            },
            {
                "DemandID": 7343,
                "CPModelID": 151,
                "ProductID": 993,
                "ProductName": "ASOC AMI",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1786,
                "DueDate": "2016-M-11",
                "Quantity": "135000"
            },
            {
                "DemandID": 7344,
                "CPModelID": 151,
                "ProductID": 993,
                "ProductName": "ASOC AMI",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1787,
                "DueDate": "2016-M-12",
                "Quantity": "450000"
            },
            {
                "DemandID": 7345,
                "CPModelID": 151,
                "ProductID": 993,
                "ProductName": "ASOC AMI",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1788,
                "DueDate": "2017-M-01",
                "Quantity": "80000"
            },
            {
                "DemandID": 7346,
                "CPModelID": 151,
                "ProductID": 993,
                "ProductName": "ASOC AMI",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1789,
                "DueDate": "2017-M-02",
                "Quantity": "256000"
            },
            {
                "DemandID": 7347,
                "CPModelID": 151,
                "ProductID": 994,
                "ProductName": "Test",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1778,
                "DueDate": "2016-M-03",
                "Quantity": "50000"
            },
            {
                "DemandID": 7348,
                "CPModelID": 151,
                "ProductID": 994,
                "ProductName": "Test",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1779,
                "DueDate": "2016-M-04",
                "Quantity": "60000"
            },
            {
                "DemandID": 7349,
                "CPModelID": 151,
                "ProductID": 994,
                "ProductName": "Test",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1780,
                "DueDate": "2016-M-05",
                "Quantity": "70000"
            },
            {
                "DemandID": 7350,
                "CPModelID": 151,
                "ProductID": 994,
                "ProductName": "Test",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1781,
                "DueDate": "2016-M-06",
                "Quantity": "80000"
            },
            {
                "DemandID": 7351,
                "CPModelID": 151,
                "ProductID": 994,
                "ProductName": "Test",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1782,
                "DueDate": "2016-M-07",
                "Quantity": "90000"
            },
            {
                "DemandID": 7352,
                "CPModelID": 151,
                "ProductID": 994,
                "ProductName": "Test",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1783,
                "DueDate": "2016-M-08",
                "Quantity": "100000"
            },
            {
                "DemandID": 7353,
                "CPModelID": 151,
                "ProductID": 994,
                "ProductName": "Test",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1784,
                "DueDate": "2016-M-09",
                "Quantity": "110000"
            },
            {
                "DemandID": 7354,
                "CPModelID": 151,
                "ProductID": 994,
                "ProductName": "Test",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1785,
                "DueDate": "2016-M-10",
                "Quantity": "120000"
            },
            {
                "DemandID": 7355,
                "CPModelID": 151,
                "ProductID": 994,
                "ProductName": "Test",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1786,
                "DueDate": "2016-M-11",
                "Quantity": "130000"
            },
            {
                "DemandID": 7356,
                "CPModelID": 151,
                "ProductID": 994,
                "ProductName": "Test",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1787,
                "DueDate": "2016-M-12",
                "Quantity": "140000"
            },
            {
                "DemandID": 7357,
                "CPModelID": 151,
                "ProductID": 994,
                "ProductName": "Test",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1788,
                "DueDate": "2017-M-01",
                "Quantity": "150000"
            },
            {
                "DemandID": 7358,
                "CPModelID": 151,
                "ProductID": 994,
                "ProductName": "Test",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1789,
                "DueDate": "2017-M-02",
                "Quantity": "160000"
            },
            {
                "DemandID": 7365,
                "CPModelID": 151,
                "ProductID": 996,
                "ProductName": "Durable Matte Prism(3 mil)",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1778,
                "DueDate": "2016-M-03",
                "Quantity": "13500"
            },
            {
                "DemandID": 7366,
                "CPModelID": 151,
                "ProductID": 996,
                "ProductName": "Durable Matte Prism(3 mil)",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1779,
                "DueDate": "2016-M-04",
                "Quantity": "9200"
            },
            {
                "DemandID": 7367,
                "CPModelID": 151,
                "ProductID": 996,
                "ProductName": "Durable Matte Prism(3 mil)",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1780,
                "DueDate": "2016-M-05",
                "Quantity": "12000"
            },
            {
                "DemandID": 7368,
                "CPModelID": 151,
                "ProductID": 996,
                "ProductName": "Durable Matte Prism(3 mil)",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1781,
                "DueDate": "2016-M-06",
                "Quantity": "13000"
            },
            {
                "DemandID": 7369,
                "CPModelID": 151,
                "ProductID": 996,
                "ProductName": "Durable Matte Prism(3 mil)",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1782,
                "DueDate": "2016-M-07",
                "Quantity": "9500"
            },
            {
                "DemandID": 7370,
                "CPModelID": 151,
                "ProductID": 996,
                "ProductName": "Durable Matte Prism(3 mil)",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1783,
                "DueDate": "2016-M-08",
                "Quantity": "15000"
            },
            {
                "DemandID": 7371,
                "CPModelID": 151,
                "ProductID": 996,
                "ProductName": "Durable Matte Prism(3 mil)",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1784,
                "DueDate": "2016-M-09",
                "Quantity": "9000"
            },
            {
                "DemandID": 7372,
                "CPModelID": 151,
                "ProductID": 996,
                "ProductName": "Durable Matte Prism(3 mil)",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1785,
                "DueDate": "2016-M-10",
                "Quantity": "15000"
            },
            {
                "DemandID": 7373,
                "CPModelID": 151,
                "ProductID": 996,
                "ProductName": "Durable Matte Prism(3 mil)",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1786,
                "DueDate": "2016-M-11",
                "Quantity": "10000"
            },
            {
                "DemandID": 7374,
                "CPModelID": 151,
                "ProductID": 996,
                "ProductName": "Durable Matte Prism(3 mil)",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1787,
                "DueDate": "2016-M-12",
                "Quantity": "10500"
            },
            {
                "DemandID": 7375,
                "CPModelID": 151,
                "ProductID": 996,
                "ProductName": "Durable Matte Prism(3 mil)",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1788,
                "DueDate": "2017-M-01",
                "Quantity": "9000"
            },
            {
                "DemandID": 7376,
                "CPModelID": 151,
                "ProductID": 996,
                "ProductName": "Durable Matte Prism(3 mil)",
                "SiteID": 1047,
                "SiteName": "DMSD",
                "PeriodID": 1789,
                "DueDate": "2017-M-02",
                "Quantity": "8000"
            }
        ],
        "ProcessModelItems": [
            {
                "ProcessID": 2547,
                "CPModelID": 151,
                "ProcessName": "Coating_ASOC AMI_MAKE",
                "ProcessStepName": "Coating",
                "NextProcessStepName": "Converting",
                "PercentLoad": "0",
                "Yield": "0",
                "WorkCenterID": 752,
                "WorkCenterName": "Enterprse",
                "ProductID": 993,
                "ProductName": "ASOC AMI",
                "SiteID": 1044,
                "SiteName": "Coating"
            },
            {
                "ProcessID": 2548,
                "CPModelID": 151,
                "ProcessName": "Micro-replication_ASOC3_MAKE",
                "ProcessStepName": "Micro-rep",
                "NextProcessStepName": "Coating",
                "PercentLoad": "0",
                "Yield": "0.9",
                "WorkCenterID": 758,
                "WorkCenterName": "MRC6",
                "ProductID": 992,
                "ProductName": "ASOC3",
                "SiteID": 1045,
                "SiteName": "Micro-replication"
            },
            {
                "ProcessID": 2549,
                "CPModelID": 151,
                "ProcessName": "Micro-replication_ASOC3_MAKE",
                "ProcessStepName": "Micro-rep",
                "NextProcessStepName": "Coating",
                "PercentLoad": "50",
                "Yield": "0.9",
                "WorkCenterID": 759,
                "WorkCenterName": "MRC7",
                "ProductID": 992,
                "ProductName": "ASOC3",
                "SiteID": 1045,
                "SiteName": "Micro-replication"
            },
            {
                "ProcessID": 2550,
                "CPModelID": 151,
                "ProcessName": "Micro-replication_ASOC3_MAKE",
                "ProcessStepName": "Micro-rep",
                "NextProcessStepName": "Coating",
                "PercentLoad": "50",
                "Yield": "0.88",
                "WorkCenterID": 760,
                "WorkCenterName": "MRC8",
                "ProductID": 992,
                "ProductName": "ASOC3",
                "SiteID": 1045,
                "SiteName": "Micro-replication"
            },
            {
                "ProcessID": 2551,
                "CPModelID": 151,
                "ProcessName": "Micro-replication_ASOC3_MAKE",
                "ProcessStepName": "Micro-rep",
                "NextProcessStepName": "Coating",
                "PercentLoad": "0",
                "Yield": "0.90",
                "WorkCenterID": 761,
                "WorkCenterName": "MRC9",
                "ProductID": 992,
                "ProductName": "ASOC3",
                "SiteID": 1045,
                "SiteName": "Micro-replication"
            },
            {
                "ProcessID": 2552,
                "CPModelID": 151,
                "ProcessName": "Coating_ASOC3_MAKE",
                "ProcessStepName": "Coating",
                "NextProcessStepName": "Converting",
                "PercentLoad": "50",
                "Yield": "0.8",
                "WorkCenterID": 752,
                "WorkCenterName": "Enterprse",
                "ProductID": 992,
                "ProductName": "ASOC3",
                "SiteID": 1044,
                "SiteName": "Coating"
            },
            {
                "ProcessID": 2553,
                "CPModelID": 151,
                "ProcessName": "Coating_ASOC3_MAKE",
                "ProcessStepName": "Coating",
                "NextProcessStepName": "Converting",
                "PercentLoad": "0",
                "Yield": "0.85",
                "WorkCenterID": 753,
                "WorkCenterName": "Voyager",
                "ProductID": 992,
                "ProductName": "ASOC3",
                "SiteID": 1044,
                "SiteName": "Coating"
            },
            {
                "ProcessID": 2554,
                "CPModelID": 151,
                "ProcessName": "Coating_ASOC3_MAKE",
                "ProcessStepName": "Coating",
                "NextProcessStepName": "Converting",
                "PercentLoad": "0",
                "Yield": "0.92",
                "WorkCenterID": 754,
                "WorkCenterName": "SG4",
                "ProductID": 992,
                "ProductName": "ASOC3",
                "SiteID": 1044,
                "SiteName": "Coating"
            },
            {
                "ProcessID": 2555,
                "CPModelID": 151,
                "ProcessName": "Coating_ASOC3_MAKE",
                "ProcessStepName": "Coating",
                "NextProcessStepName": "Converting",
                "PercentLoad": "0",
                "Yield": "1",
                "WorkCenterID": 755,
                "WorkCenterName": "Coater 26",
                "ProductID": 992,
                "ProductName": "ASOC3",
                "SiteID": 1044,
                "SiteName": "Coating"
            },
            {
                "ProcessID": 2556,
                "CPModelID": 151,
                "ProcessName": "Coating_ASOC3_MAKE",
                "ProcessStepName": "Coating",
                "NextProcessStepName": "Converting",
                "PercentLoad": "0",
                "Yield": "0.7",
                "WorkCenterID": 756,
                "WorkCenterName": "Coater 27",
                "ProductID": 992,
                "ProductName": "ASOC3",
                "SiteID": 1044,
                "SiteName": "Coating"
            },
            {
                "ProcessID": 2557,
                "CPModelID": 151,
                "ProcessName": "Coating_ASOC3_MAKE",
                "ProcessStepName": "Coating",
                "NextProcessStepName": "Converting",
                "PercentLoad": "0",
                "Yield": "0.7",
                "WorkCenterID": 757,
                "WorkCenterName": "SG2",
                "ProductID": 992,
                "ProductName": "ASOC3",
                "SiteID": 1044,
                "SiteName": "Coating"
            },
            {
                "ProcessID": 2558,
                "CPModelID": 151,
                "ProcessName": "Converting_ASOC3_MAKE",
                "ProcessStepName": "Converting",
                "NextProcessStepName": "None",
                "PercentLoad": "100",
                "Yield": "0.35",
                "WorkCenterID": 767,
                "WorkCenterName": "APAC Converting",
                "ProductID": 992,
                "ProductName": "ASOC3",
                "SiteID": 1049,
                "SiteName": "Converting"
            },
            {
                "ProcessID": 2559,
                "CPModelID": 151,
                "ProcessName": "PET Film Making_ASOC3_MAKE",
                "ProcessStepName": "PET 1.14 Film",
                "NextProcessStepName": "Micro-rep",
                "PercentLoad": "50",
                "Yield": "0.5",
                "WorkCenterID": 763,
                "WorkCenterName": "G2",
                "ProductID": 992,
                "ProductName": "ASOC3",
                "SiteID": 1046,
                "SiteName": "PET Film Making"
            },
            {
                "ProcessID": 2560,
                "CPModelID": 151,
                "ProcessName": "PET Film Making_ASOC3_MAKE",
                "ProcessStepName": "PET 1.14 Film",
                "NextProcessStepName": "Micro-rep",
                "PercentLoad": "50",
                "Yield": "0.3",
                "WorkCenterID": 762,
                "WorkCenterName": "G1",
                "ProductID": 992,
                "ProductName": "ASOC3",
                "SiteID": 1046,
                "SiteName": "PET Film Making"
            },
            {
                "ProcessID": 2561,
                "CPModelID": 151,
                "ProcessName": "PET Film Making_ASOC3_MAKE",
                "ProcessStepName": "PET 1.14 Film",
                "NextProcessStepName": "Micro-rep",
                "PercentLoad": "0",
                "Yield": "0.55",
                "WorkCenterID": 764,
                "WorkCenterName": "G3",
                "ProductID": 992,
                "ProductName": "ASOC3",
                "SiteID": 1046,
                "SiteName": "PET Film Making"
            },
            {
                "ProcessID": 2562,
                "CPModelID": 151,
                "ProcessName": "Micro-replication_ASOC3_MAKE",
                "ProcessStepName": "MRC Top Prism",
                "NextProcessStepName": "Coating",
                "PercentLoad": "50",
                "Yield": "0.9",
                "WorkCenterID": 758,
                "WorkCenterName": "MRC6",
                "ProductID": 992,
                "ProductName": "ASOC3",
                "SiteID": 1045,
                "SiteName": "Micro-replication"
            },
            {
                "ProcessID": 2563,
                "CPModelID": 151,
                "ProcessName": "Micro-replication_ASOC3_MAKE",
                "ProcessStepName": "MRC Top Prism",
                "NextProcessStepName": "Coating",
                "PercentLoad": "50",
                "Yield": "0.91",
                "WorkCenterID": 759,
                "WorkCenterName": "MRC7",
                "ProductID": 992,
                "ProductName": "ASOC3",
                "SiteID": 1045,
                "SiteName": "Micro-replication"
            },
            {
                "ProcessID": 2564,
                "CPModelID": 151,
                "ProcessName": "Micro-replication_ASOC3_MAKE",
                "ProcessStepName": "MRC Top Prism",
                "NextProcessStepName": "Coating",
                "PercentLoad": "0",
                "Yield": "0.92",
                "WorkCenterID": 760,
                "WorkCenterName": "MRC8",
                "ProductID": 992,
                "ProductName": "ASOC3",
                "SiteID": 1045,
                "SiteName": "Micro-replication"
            },
            {
                "ProcessID": 2565,
                "CPModelID": 151,
                "ProcessName": "Micro-replication_ASOC3_MAKE",
                "ProcessStepName": "MRC Top Prism",
                "NextProcessStepName": "Coating",
                "PercentLoad": "0",
                "Yield": "0.93",
                "WorkCenterID": 761,
                "WorkCenterName": "MRC9",
                "ProductID": 992,
                "ProductName": "ASOC3",
                "SiteID": 1045,
                "SiteName": "Micro-replication"
            },
            {
                "ProcessID": 2566,
                "CPModelID": 151,
                "ProcessName": "PET Film Making_ASOC3_MAKE",
                "ProcessStepName": "PET 1.14 Top Prism",
                "NextProcessStepName": "MRC Top Prism",
                "PercentLoad": "50",
                "Yield": "0.4",
                "WorkCenterID": 763,
                "WorkCenterName": "G2",
                "ProductID": 992,
                "ProductName": "ASOC3",
                "SiteID": 1046,
                "SiteName": "PET Film Making"
            },
            {
                "ProcessID": 2567,
                "CPModelID": 151,
                "ProcessName": "PET Film Making_ASOC3_MAKE",
                "ProcessStepName": "PET 1.14 Top Prism",
                "NextProcessStepName": "MRC Top Prism",
                "PercentLoad": "50",
                "Yield": "0.6",
                "WorkCenterID": 764,
                "WorkCenterName": "G3",
                "ProductID": 992,
                "ProductName": "ASOC3",
                "SiteID": 1046,
                "SiteName": "PET Film Making"
            },
            {
                "ProcessID": 2568,
                "CPModelID": 151,
                "ProcessName": "PET Film Making_Durable Matte Prism(3 mil)_MAKE",
                "ProcessStepName": "PET 3mil Optical",
                "NextProcessStepName": "MRC-DMV2 Bottom",
                "PercentLoad": "100",
                "Yield": "0.45",
                "WorkCenterID": 764,
                "WorkCenterName": "G3",
                "ProductID": 996,
                "ProductName": "Durable Matte Prism(3 mil)",
                "SiteID": 1046,
                "SiteName": "PET Film Making"
            },
            {
                "ProcessID": 2569,
                "CPModelID": 151,
                "ProcessName": "Micro-replication_Durable Matte Prism(3 mil)_MAKE",
                "ProcessStepName": "MRC-DMV2 Bottom",
                "NextProcessStepName": "MRC-DMV2 Top",
                "PercentLoad": "100",
                "Yield": "0.90",
                "WorkCenterID": 760,
                "WorkCenterName": "MRC8",
                "ProductID": 996,
                "ProductName": "Durable Matte Prism(3 mil)",
                "SiteID": 1045,
                "SiteName": "Micro-replication"
            },
            {
                "ProcessID": 2570,
                "CPModelID": 151,
                "ProcessName": "Micro-replication_Durable Matte Prism(3 mil)_MAKE",
                "ProcessStepName": "MRC-DMV2 Top",
                "NextProcessStepName": "Converting",
                "PercentLoad": "50",
                "Yield": "0.90",
                "WorkCenterID": 760,
                "WorkCenterName": "MRC8",
                "ProductID": 996,
                "ProductName": "Durable Matte Prism(3 mil)",
                "SiteID": 1045,
                "SiteName": "Micro-replication"
            },
            {
                "ProcessID": 2571,
                "CPModelID": 151,
                "ProcessName": "Converting_Durable Matte Prism(3 mil)_MAKE",
                "ProcessStepName": "Converting",
                "NextProcessStepName": "None",
                "PercentLoad": "100",
                "Yield": "0.45",
                "WorkCenterID": 767,
                "WorkCenterName": "APAC Converting",
                "ProductID": 996,
                "ProductName": "Durable Matte Prism(3 mil)",
                "SiteID": 1049,
                "SiteName": "Converting"
            },
            {
                "ProcessID": 2572,
                "CPModelID": 151,
                "ProcessName": "PET Film Making_Durable Matte Prism(3 mil)_MAKE",
                "ProcessStepName": "PET 3mil Optical Single Pass",
                "NextProcessStepName": "MRC-DMV2 Single Pass",
                "PercentLoad": "100",
                "Yield": "0.45",
                "WorkCenterID": 764,
                "WorkCenterName": "G3",
                "ProductID": 996,
                "ProductName": "Durable Matte Prism(3 mil)",
                "SiteID": 1046,
                "SiteName": "PET Film Making"
            },
            {
                "ProcessID": 2573,
                "CPModelID": 151,
                "ProcessName": "Micro-replication_Durable Matte Prism(3 mil)_MAKE",
                "ProcessStepName": "MRC-DMV2 Single Pass",
                "NextProcessStepName": "Converting",
                "PercentLoad": "50",
                "Yield": "0.92",
                "WorkCenterID": 760,
                "WorkCenterName": "MRC8",
                "ProductID": 996,
                "ProductName": "Durable Matte Prism(3 mil)",
                "SiteID": 1045,
                "SiteName": "Micro-replication"
            },
            {
                "ProcessID": 2574,
                "CPModelID": 151,
                "ProcessName": "Converting_HG Matte Prism 2 mil_MAKE",
                "ProcessStepName": "Converting",
                "NextProcessStepName": "None",
                "PercentLoad": "100",
                "Yield": "0.57",
                "WorkCenterID": 767,
                "WorkCenterName": "APAC Converting",
                "ProductID": 997,
                "ProductName": "HG Matte Prism 2 mil",
                "SiteID": 1049,
                "SiteName": "Converting"
            },
            {
                "ProcessID": 2575,
                "CPModelID": 151,
                "ProcessName": "Micro-replication_HG Matte Prism 2 mil_MAKE",
                "ProcessStepName": "MRC",
                "NextProcessStepName": "Converting",
                "PercentLoad": "50",
                "Yield": "0.9",
                "WorkCenterID": 758,
                "WorkCenterName": "MRC6",
                "ProductID": 997,
                "ProductName": "HG Matte Prism 2 mil",
                "SiteID": 1045,
                "SiteName": "Micro-replication"
            },
            {
                "ProcessID": 2576,
                "CPModelID": 151,
                "ProcessName": "Micro-replication_HG Matte Prism 2 mil_MAKE",
                "ProcessStepName": "MRC",
                "NextProcessStepName": "Converting",
                "PercentLoad": "0",
                "Yield": "0.9",
                "WorkCenterID": 759,
                "WorkCenterName": "MRC7",
                "ProductID": 997,
                "ProductName": "HG Matte Prism 2 mil",
                "SiteID": 1045,
                "SiteName": "Micro-replication"
            },
            {
                "ProcessID": 2577,
                "CPModelID": 151,
                "ProcessName": "Micro-replication_HG Matte Prism 2 mil_MAKE",
                "ProcessStepName": "MRC",
                "NextProcessStepName": "Converting",
                "PercentLoad": "0",
                "Yield": "0.9",
                "WorkCenterID": 760,
                "WorkCenterName": "MRC8",
                "ProductID": 997,
                "ProductName": "HG Matte Prism 2 mil",
                "SiteID": 1045,
                "SiteName": "Micro-replication"
            },
            {
                "ProcessID": 2578,
                "CPModelID": 151,
                "ProcessName": "Micro-replication_HG Matte Prism 2 mil_MAKE",
                "ProcessStepName": "MRC",
                "NextProcessStepName": "Converting",
                "PercentLoad": "0",
                "Yield": "0.9",
                "WorkCenterID": 761,
                "WorkCenterName": "MRC9",
                "ProductID": 997,
                "ProductName": "HG Matte Prism 2 mil",
                "SiteID": 1045,
                "SiteName": "Micro-replication"
            },
            {
                "ProcessID": 2579,
                "CPModelID": 151,
                "ProcessName": "Coating_HG Matte Prism 2 mil_MAKE",
                "ProcessStepName": "Coating",
                "NextProcessStepName": "MRC",
                "PercentLoad": "0",
                "Yield": "0.8",
                "WorkCenterID": 752,
                "WorkCenterName": "Enterprse",
                "ProductID": 997,
                "ProductName": "HG Matte Prism 2 mil",
                "SiteID": 1044,
                "SiteName": "Coating"
            },
            {
                "ProcessID": 2580,
                "CPModelID": 151,
                "ProcessName": "Coating_HG Matte Prism 2 mil_MAKE",
                "ProcessStepName": "Coating",
                "NextProcessStepName": "MRC",
                "PercentLoad": "100",
                "Yield": "0.8",
                "WorkCenterID": 753,
                "WorkCenterName": "Voyager",
                "ProductID": 997,
                "ProductName": "HG Matte Prism 2 mil",
                "SiteID": 1044,
                "SiteName": "Coating"
            },
            {
                "ProcessID": 2581,
                "CPModelID": 151,
                "ProcessName": "Coating_HG Matte Prism 2 mil_MAKE",
                "ProcessStepName": "Coating",
                "NextProcessStepName": "MRC",
                "PercentLoad": "0",
                "Yield": "0.8",
                "WorkCenterID": 754,
                "WorkCenterName": "SG4",
                "ProductID": 997,
                "ProductName": "HG Matte Prism 2 mil",
                "SiteID": 1044,
                "SiteName": "Coating"
            },
            {
                "ProcessID": 2585,
                "CPModelID": 151,
                "ProcessName": "PET Film Making_HG Matte Prism 2 mil_MAKE",
                "ProcessStepName": "PET Film Making",
                "NextProcessStepName": "Coating",
                "PercentLoad": "0",
                "Yield": "0",
                "WorkCenterID": 762,
                "WorkCenterName": "G1",
                "ProductID": 997,
                "ProductName": "HG Matte Prism 2 mil",
                "SiteID": 1046,
                "SiteName": "PET Film Making"
            },
            {
                "ProcessID": 2586,
                "CPModelID": 151,
                "ProcessName": "PET Film Making_HG Matte Prism 2 mil_MAKE",
                "ProcessStepName": "PET Film Making",
                "NextProcessStepName": "Coating",
                "PercentLoad": "100",
                "Yield": "0.47",
                "WorkCenterID": 763,
                "WorkCenterName": "G2",
                "ProductID": 997,
                "ProductName": "HG Matte Prism 2 mil",
                "SiteID": 1046,
                "SiteName": "PET Film Making"
            },
            {
                "ProcessID": 2587,
                "CPModelID": 151,
                "ProcessName": "PET Film Making_HG Matte Prism 2 mil_MAKE",
                "ProcessStepName": "PET Film Making",
                "NextProcessStepName": "Coating",
                "PercentLoad": "0",
                "Yield": "0",
                "WorkCenterID": 764,
                "WorkCenterName": "G3",
                "ProductID": 997,
                "ProductName": "HG Matte Prism 2 mil",
                "SiteID": 1046,
                "SiteName": "PET Film Making"
            },
            {
                "ProcessID": 2588,
                "CPModelID": 151,
                "ProcessName": "PET Film Making_HG Matte Prism 2 mil_MAKE",
                "ProcessStepName": "PET Film Making",
                "NextProcessStepName": "Coating",
                "PercentLoad": "0",
                "Yield": "0",
                "WorkCenterID": 765,
                "WorkCenterName": "D7",
                "ProductID": 997,
                "ProductName": "HG Matte Prism 2 mil",
                "SiteID": 1046,
                "SiteName": "PET Film Making"
            },
            {
                "ProcessID": 2589,
                "CPModelID": 151,
                "ProcessName": "PET Film Making_HG Matte Prism 2 mil_MAKE",
                "ProcessStepName": "PET Film Making",
                "NextProcessStepName": "Coating",
                "PercentLoad": "0",
                "Yield": "0",
                "WorkCenterID": 766,
                "WorkCenterName": "D8",
                "ProductID": 997,
                "ProductName": "HG Matte Prism 2 mil",
                "SiteID": 1046,
                "SiteName": "PET Film Making"
            },
            {
                "ProcessID": 2590,
                "CPModelID": 151,
                "ProcessName": "Coating_HG Matte Prism 2 mil_MAKE",
                "ProcessStepName": "Coating Narrow",
                "NextProcessStepName": "MRC Narrow",
                "PercentLoad": "50",
                "Yield": "0.9",
                "WorkCenterID": 755,
                "WorkCenterName": "Coater 26",
                "ProductID": 997,
                "ProductName": "HG Matte Prism 2 mil",
                "SiteID": 1044,
                "SiteName": "Coating"
            },
            {
                "ProcessID": 2591,
                "CPModelID": 151,
                "ProcessName": "Coating_HG Matte Prism 2 mil_MAKE",
                "ProcessStepName": "Coating Narrow",
                "NextProcessStepName": "MRC Narrow",
                "PercentLoad": "50",
                "Yield": "0.9",
                "WorkCenterID": 756,
                "WorkCenterName": "Coater 27",
                "ProductID": 997,
                "ProductName": "HG Matte Prism 2 mil",
                "SiteID": 1044,
                "SiteName": "Coating"
            },
            {
                "ProcessID": 2592,
                "CPModelID": 151,
                "ProcessName": "Coating_HG Matte Prism 2 mil_MAKE",
                "ProcessStepName": "Coating Narrow",
                "NextProcessStepName": "MRC Narrow",
                "PercentLoad": "0",
                "Yield": "0",
                "WorkCenterID": 757,
                "WorkCenterName": "SG2",
                "ProductID": 997,
                "ProductName": "HG Matte Prism 2 mil",
                "SiteID": 1044,
                "SiteName": "Coating"
            },
            {
                "ProcessID": 2593,
                "CPModelID": 151,
                "ProcessName": "Jumbo Slitting_HG Matte Prism 2 mil_MAKE",
                "ProcessStepName": "Slitting",
                "NextProcessStepName": "Coating Narrow",
                "PercentLoad": "100",
                "Yield": "0.9",
                "WorkCenterID": 770,
                "WorkCenterName": "3A",
                "ProductID": 997,
                "ProductName": "HG Matte Prism 2 mil",
                "SiteID": 1051,
                "SiteName": "Jumbo Slitting"
            },
            {
                "ProcessID": 2594,
                "CPModelID": 151,
                "ProcessName": "PET Film Making_HG Matte Prism 2 mil_MAKE",
                "ProcessStepName": "PET Film Making Narrow",
                "NextProcessStepName": "Slitting",
                "PercentLoad": "0",
                "Yield": "0",
                "WorkCenterID": 762,
                "WorkCenterName": "G1",
                "ProductID": 997,
                "ProductName": "HG Matte Prism 2 mil",
                "SiteID": 1046,
                "SiteName": "PET Film Making"
            },
            {
                "ProcessID": 2595,
                "CPModelID": 151,
                "ProcessName": "PET Film Making_HG Matte Prism 2 mil_MAKE",
                "ProcessStepName": "PET Film Making Narrow",
                "NextProcessStepName": "Slitting",
                "PercentLoad": "100",
                "Yield": "0.47",
                "WorkCenterID": 763,
                "WorkCenterName": "G2",
                "ProductID": 997,
                "ProductName": "HG Matte Prism 2 mil",
                "SiteID": 1046,
                "SiteName": "PET Film Making"
            },
            {
                "ProcessID": 2596,
                "CPModelID": 151,
                "ProcessName": "PET Film Making_HG Matte Prism 2 mil_MAKE",
                "ProcessStepName": "PET Film Making Narrow",
                "NextProcessStepName": "Slitting",
                "PercentLoad": "0",
                "Yield": "0",
                "WorkCenterID": 764,
                "WorkCenterName": "G3",
                "ProductID": 997,
                "ProductName": "HG Matte Prism 2 mil",
                "SiteID": 1046,
                "SiteName": "PET Film Making"
            },
            {
                "ProcessID": 2597,
                "CPModelID": 151,
                "ProcessName": "Micro-replication_HG Matte Prism 2 mil_MAKE",
                "ProcessStepName": "MRC Narrow",
                "NextProcessStepName": "Converting",
                "PercentLoad": "50",
                "Yield": "0.8",
                "WorkCenterID": 758,
                "WorkCenterName": "MRC6",
                "ProductID": 997,
                "ProductName": "HG Matte Prism 2 mil",
                "SiteID": 1045,
                "SiteName": "Micro-replication"
            },
            {
                "ProcessID": 2598,
                "CPModelID": 151,
                "ProcessName": "Converting_HG Trans Prism 3 mil_MAKE",
                "ProcessStepName": "Converting",
                "NextProcessStepName": "None",
                "PercentLoad": "100",
                "Yield": "0.52",
                "WorkCenterID": 767,
                "WorkCenterName": "APAC Converting",
                "ProductID": 998,
                "ProductName": "HG Trans Prism 3 mil",
                "SiteID": 1049,
                "SiteName": "Converting"
            },
            {
                "ProcessID": 2599,
                "CPModelID": 151,
                "ProcessName": "Micro-replication_HG Trans Prism 3 mil_MAKE",
                "ProcessStepName": "MRC",
                "NextProcessStepName": "Converting",
                "PercentLoad": "50",
                "Yield": "0.92",
                "WorkCenterID": 758,
                "WorkCenterName": "MRC6",
                "ProductID": 998,
                "ProductName": "HG Trans Prism 3 mil",
                "SiteID": 1045,
                "SiteName": "Micro-replication"
            },
            {
                "ProcessID": 2600,
                "CPModelID": 151,
                "ProcessName": "Micro-replication_HG Trans Prism 3 mil_MAKE",
                "ProcessStepName": "MRC",
                "NextProcessStepName": "Converting",
                "PercentLoad": "50",
                "Yield": "0.92",
                "WorkCenterID": 759,
                "WorkCenterName": "MRC7",
                "ProductID": 998,
                "ProductName": "HG Trans Prism 3 mil",
                "SiteID": 1045,
                "SiteName": "Micro-replication"
            },
            {
                "ProcessID": 2601,
                "CPModelID": 151,
                "ProcessName": "Micro-replication_HG Trans Prism 3 mil_MAKE",
                "ProcessStepName": "MRC",
                "NextProcessStepName": "Converting",
                "PercentLoad": "0",
                "Yield": "0",
                "WorkCenterID": 760,
                "WorkCenterName": "MRC8",
                "ProductID": 998,
                "ProductName": "HG Trans Prism 3 mil",
                "SiteID": 1045,
                "SiteName": "Micro-replication"
            },
            {
                "ProcessID": 2602,
                "CPModelID": 151,
                "ProcessName": "Micro-replication_HG Trans Prism 3 mil_MAKE",
                "ProcessStepName": "MRC",
                "NextProcessStepName": "Converting",
                "PercentLoad": "0",
                "Yield": "0",
                "WorkCenterID": 761,
                "WorkCenterName": "MRC9",
                "ProductID": 998,
                "ProductName": "HG Trans Prism 3 mil",
                "SiteID": 1045,
                "SiteName": "Micro-replication"
            },
            {
                "ProcessID": 2603,
                "CPModelID": 151,
                "ProcessName": "PET Film Making_HG Trans Prism 3 mil_MAKE",
                "ProcessStepName": "PET Film Making",
                "NextProcessStepName": "MRC",
                "PercentLoad": "100",
                "Yield": "0.41",
                "WorkCenterID": 763,
                "WorkCenterName": "G2",
                "ProductID": 998,
                "ProductName": "HG Trans Prism 3 mil",
                "SiteID": 1046,
                "SiteName": "PET Film Making"
            },
            {
                "ProcessID": 2604,
                "CPModelID": 151,
                "ProcessName": "PET Film Making_HG Trans Prism 3 mil_MAKE",
                "ProcessStepName": "PET Film Making",
                "NextProcessStepName": "MRC",
                "PercentLoad": "0",
                "Yield": "0",
                "WorkCenterID": 764,
                "WorkCenterName": "G3",
                "ProductID": 998,
                "ProductName": "HG Trans Prism 3 mil",
                "SiteID": 1046,
                "SiteName": "PET Film Making"
            }
        ],
        "AvailableCapacityBasedModelItems": []
    }

    function addPeriods() {
        //TODO JTO:  for now just build a new available hours but in future need to remove this for truly new.
        buildAvailableHoursModel();
        addPeriodsToAvailableHoursModel();
        addPeriodsToDemandModle();
        console.log("routes included");
        //console.table(dataModel.ProcessModelItems);
        addProduct();
    }

    function buildAvailableHoursModel() {
        //build available hours model for each workcenter and each period using staring values.
        var hoursModel = {
            "CPModelID": 151,
            "AvailableHrsID": 2000,
            "SiteID": 1051,
            "WorkCenterID": 770,
            "PeriodID": 1778,
            "HoursPerShift": 8,
            "ShiftsPerDay": 3,
            "DaysPerWeek": 5,
            "ChangeOver": 0,
            "Evaluation": 0,
            "Experiment": 0,
            "Preventative": 0,
            "Others": 0
        };

        dataModel.AvailableHoursModelItems = [];
        var lastHoursID = hoursModel.AvailableHrsID;
        _.each(dataModel.WorkCenterModelItems, function (wc) {
            _.each(dataModel.PeriodModelItems, function (period) {
                var newItem = {};
                newItem.CPModelID = hoursModel.CPModelID;
                newItem.AvailableHrsID = lastHoursID;
                lastHoursID++;
                newItem.SiteID = wc.SiteID;
                newItem.WorkCenterID = wc.WorkCenterID;
                newItem.PeriodID = period.PeriodID;
                newItem.HoursPerShift = hoursModel.HoursPerShift;
                newItem.ShiftsPerDay = hoursModel.ShiftsPerDay;
                newItem.DaysPerWeek = hoursModel.DaysPerWeek;
                newItem.ChangeOver = hoursModel.ChangeOver;
                newItem.Evaluation = hoursModel.Evaluation;
                newItem.Experiment = hoursModel.Experiment;
                newItem.Preventative = hoursModel.Preventative;
                newItem.Others = hoursModel.Others;
                dataModel.AvailableHoursModelItems.push(newItem);
            });
        });
        console.log("Built available hours modle from ", dataModel.WorkCenterModelItems.length, " workcenters and ", dataModel.PeriodModelItems.length, " Periods");
        console.log(" hsould be ", dataModel.WorkCenterModelItems.length * dataModel.PeriodModelItems.length, " rows");

        //console.table(dataModel.AvailableHoursModelItems);
    }

    function addPeriodsToDemandModle() {
        var baseLine = {
            "DemandID": 7377,
            "CPModelID": 151,
            "ProductID": 997,
            "ProductName": "HG Matte Prism 2 mil",
            "SiteID": 1047,
            "SiteName": "DMSD",
            "PeriodID": 1778,
            "DueDate": "2016-M-03",
            "Quantity": "4600"
        };

        var periods = [];
        var lastDemandID = -1;

        _.each(dataModel.DemandModelItems, function (demandItem) {
            periods.push(demandItem.PeriodID);
            if (demandItem.DemandID > lastDemandID) {
                lastDemandID = demandItem.DemandID;
            }
        });

        var itemsToAdd = [];
        _.each(dataModel.DemandModelItems, function (demandItem) {
            _.each(dataModel.PeriodModelItems, function (periodItem) {
                if (!_.includes(periods, periodItem.PeriodID)) {

                    var newItem = {};
                    lastDemandID++;
                    newItem.DemandID = lastDemandID;
                    newItem.CPModelID = demandItem.CPModelID;
                    newItem.ProductID = demandItem.ProductID;
                    newItem.ProductName = demandItem.ProductName;
                    newItem.SiteID = demandItem.SiteID;
                    newItem.SiteName = demandItem.SiteName;
                    newItem.PeriodID = periodItem.PeriodID;
                    newItem.DueDate = periodItem.PeriodName;
                    newItem.Quantity = Math.floor(Math.random() * 60000) + 1000;
                    itemsToAdd.push(newItem);
                };

            })

        });
        console.log("Periods added to demand model")
       // console.table(itemsToAdd);
        _.each(itemsToAdd, function (item) {
            dataModel.DemandModelItems.push(item);
        });

    }

    function addProductDemandToDemandModel(product, demand) {
        console.table(dataModel.PeriodModelItems);

        //JTO TODO:  Remove this it's just temp random fill of demand
        //JTO TODO:  Date range needs to come from somewhere.
        var tempStartPeriod = "2016-M-01";
        if(!demand) {
            demand = [];
            for(var i = 0; i < dataModel.PeriodModelItems.length; i++) {
                demand.push(Math.floor(Math.random() * 1000000));
            }

        };
        var lastDemandID = -1;
        _.each(dataModel.DemandModelItems, function(demandItem){
            if(demandItem.DemandID > lastDemandID) {
                lastDemandID = demandItem.DemandID
            };
        });


        var newDemandItem = {};
        var year = tempStartPeriod.slice(0, -5);
        console.log("year", year);
        var month = tempStartPeriod.slice(7,9);
        console.log("month", month)
        var nextPeriod;
        var newItems = [];
        var periodID;

        _.each(demand, function(periodAmount) {
            nextPeriod = year + "-M-" + month;
            periodID =  _.result(_.find(dataModel.PeriodModelItems, function(period){
                return period.PeriodName == nextPeriod;
            }), 'PeriodID');
            newDemandItem = {};
            lastDemandID++;
            newDemandItem.DemandID = lastDemandID;
            newDemandItem.CPModelID = dataModel.DemandModelItems[0].CPModelID;
            newDemandItem.ProductID = product.ProductID;
            newDemandItem.ProductName = product.ProductName;
            newDemandItem.SiteID = dataModel.DemandModelItems[0].SiteID;
            newDemandItem.SiteName = dataModel.DemandModelItems[0].SiteName;
            newDemandItem.DueDate = nextPeriod;
            newDemandItem.PeriodID = periodID;
            newDemandItem.Quantity = periodAmount;
            month++;
            if(month > 12) {
                month = 1;
                year++;
            };
            if(month < 10) {
                month = "0" + month;
            };
            newItems.push(newDemandItem);

        });
        console.log("new demand items");
        console.table(newItems);

        _.each(newItems, function(item) {
            dataModel.DemandModelItems.push(item);
        });

      

    }

    function addProduct() {
        var baseline = {
            "CPModelID": 151,
            "ProductID": 992,
            "ProductName": "ASOC3",
            "ProductDescription": "",
            "SellingPrice": "40",
            "Currency": "USD",
            "Notes": "Test product",
            "IsIncluded": 1
        };
        

        var numToAdd = 2;
        var prodName;
        var lastProdID = -1;
        var newProducts = [];
        var newProcesses = [];
        var lastProcess;
        var lastProcessID = -1;
        var newItem = {};
        var numberSteps = Math.floor(Math.random() * 6) + 1;
        var newPS = {};


        // var operations = _.each(dataModel.SiteModelItems, function (op) {
        //     return op.SiteID;
        // });

        _.each(dataModel.ProductModelItems, function (product) {
            if (product.ProductID > lastProdID) {
                lastProdID = product.ProductID;
            }
        });
        //generate new product item
        for (var i = 0; i < numToAdd; i++) {
            prodName = "A" + i;
            newItem = {};
            newItem.CPModelID = baseline.CPModelID;
            lastProdID++;
            newItem.ProductID = lastProdID;
            newItem.ProductName = prodName;
            newItem.ProductDescription = "test add product " + prodName;
            newItem.SellingPrice = Math.floor(Math.random() * 20) + 1;
            newItem.Currency = "USD";
            newItem.Notes = "testing product adds"
            newItem.IsIncluded = 1;
            newProducts.push(newItem);
        };

        _.each(newProducts, function(product){
            dataModel.ProductModelItems.push(product);
            addProductDemandToDemandModel(product);
        });


        //generate a route for each new product item randomly
        _.each(dataModel.ProcessModelItems, function (processItem) {
            if (processItem.ProcessID > lastProcessID) {
                lastProcessID = processItem.ProcessID;
            }

        });
        
        _.each(newProducts, function(product){
            numberSteps = Math.floor(Math.random() * 6) + 1;
            for (var step = 0; step < numberSteps; step++) {
                if (step == 0) {
                    var wcAvailable = [];
                    _.each(dataModel.WorkCenterModelItems, function (wc) {
                        console.log("workcenters siteID", wc.SiteID, wc.WorkCenterID)
                        if (wc.SiteID == 1049) {
                            wcAvailable.push(wc);
                        }

                    });
                    console.log("step = 0 wcAvailable", wcAvailable);
                    _.each(wcAvailable, function(center){
                      
                        newPS = {};
                        newPS.CPModelID = dataModel.ProcessModelItems[0].CPModelID;;
                        lastProcessID++;
                        newPS.ProcessID = lastProcessID;
                        newPS.ProcessName = "Converting_" + product.ProductName
                        newPS.ProcessStepName = "Converting_" + product.ProductName;
                        newPS.NextProcessStepName = "none";
                        newPS.NextProcessStepID = 0;
                        newPS.ProductID = product.ProductID;
                        newPS.ProductName = product.ProductName;
                        newPS.SiteID = 1040;
                        newPS.SiteName = "Converting";
                        newPS.PercentLoad = 100/wcAvailable.length;
                        newPS.Yield = (Math.floor(Math.random() * 60) + 20)/100;
                        newPS.WorkCenterID = center.WorkCenterID;
                        newPS.WorkCenterName = center.WorkCenterName;
                    });
                    newProcesses.push(newPS);
                    console.log("newprocesses length", newProcesses.length);


                } else {
                    var nextOperation = dataModel.SiteModelItems[Math.floor(Math.random() * dataModel.SiteModelItems.length)];
                    console.log("next operation randomly chose as ", nextOperation);
                    wcAvailable = [];
                    _.each(dataModel.WorkCenterModelItems, function (wc) {
                        if (wc.SiteID == nextOperation.SiteID) {
                            wcAvailable.push(wc);
                        };

                    });
                    console.log("step = ", step, " wcAvailable", wcAvailable);
                    _.each(wcAvailable, function(center){
                        console.log("processing workcenter ", center, " with nextOperation ", nextOperation.SiteName);
                        newPS = {};
                        newPS.CPModelID = dataModel.ProcessModelItems[0].CPModelID;
                        lastProcessID++;
                        newPS.ProcessID = lastProcessID;
                        newPS.ProcessName = nextOperation.SiteName + "_" + product.ProductName;
                        newPS.ProcessStepName = nextOperation.SiteName + "_" + product.ProductName;
                        newPS.NextProcessStepName = lastProcess.ProcessStepName;
                        newPS.NextProcessStepID = lastProcess.ProcessID;
                        newPS.ProductID = product.ProductID;
                        newPS.ProductName = product.ProductName;
                        newPS.SiteID = nextOperation.SiteID;
                        newPS.SiteName = nextOperation.SiteName
                        newPS.PercentLoad = 100/wcAvailable.length;
                        newPS.Yield = (Math.floor(Math.random() * 60) + 20)/100;
                        newPS.WorkCenterID = center.WorkCenterID;
                        newPS.WorkCenterName = center.WorkCenterName;
                        _.each(newPS, function(key, val){
                            console.log("key", key, "value", val);
                        });
                        console.log("Pushing new ps ", newPS);
                        newProcesses.push(newPS);
                        console.log("newprocesses length", newProcesses.length);
                    });

                }
                lastProcess = angular.copy(newPS);

            }

        });
            
        console.log("new routes");
        console.table(newProcesses);
        _.each(newProcesses, function(process){
            dataModel.ProcessModelItems.push(process);
        });
        

    }

    function addPeriodsToAvailableHoursModel() {
        //make an array of exising periods in periodmodel to check against in other models

        var periods = [];
        var lastHoursID = -1;

        _.each(dataModel.AvailableHoursModelItems, function (hoursModel) {
            periods.push(hoursModel.PeriodID)
            if (hoursModel.AvailableHrsID > lastHoursID) {
                lastHoursID = hoursModel.AvailableHrsID;
            }
        });

        var itemsToAdd = [];
        _.each(dataModel.AvailableHoursModelItems, function (hoursModel) {
            _.each(dataModel.PeriodModelItems, function (periodItem) {
                if (!_.includes(periods, periodItem.PeriodID)) {
                    var newItem = {};
                    newItem.CPModelID = hoursModel.CPModelID;
                    lastHoursID++;
                    newItem.AvailableHrsID = lastHoursID;
                    newItem.SiteID = hoursModel.SiteID;
                    newItem.WorkCenterID = hoursModel.WorkCenterID;
                    newItem.PeriodID = period.PeriodID;
                    newItem.HoursPerShift = hoursModel.HoursPerShift;
                    newItem.ShiftsPerDay = hoursModel.ShiftsPerDay;
                    newItem.DaysPerWeek = hoursModel.DaysPerWeek;
                    newItem.ChangeOver = hoursModel.ChangeOver;
                    newItem.Evaluation = hoursModel.Evaluation;
                    newItem.Experiment = hoursModel.Experiment;
                    newItem.Preventative = hoursModel.Preventative;
                    newItem.Others = hoursModel.Others;
                    itemsToAdd.push(newItem);
                };

            });

        });
        console.log("Periods added to hours model")
       // console.table(itemsToAdd);
        _.each(itemsToAdd, function (item) {
            dataModel.AvailableHoursModelItems.push(item);
        });

    }

    function buildProductDemand() {
        _.each(dataModel.DemandModelItems, function(demandItem){
            _.each(dataModel.ProductModelItems, function(product){
                if(!product.Demand) {
                    product.Demand = {};
                }
                if(product.ProductID === demandItem.ProductID) {
                    
                    product.Demand[demandItem.DueDate] = parseInt(demandItem.Quantity);
                }
            })
        })
    }

    function buildOperationsWorkcenters() {
        _.each(dataModel.SiteModelItems, function(operation){
            if(!operation.WorkCenters){
                operation.WorkCenters = [];
            }
            _.each(dataModel.WorkCenterModelItems, function(workcenter){
                if(workcenter.SiteID === operation.SiteID){
                    operation.WorkCenters.push(workcenter);
                }
            })
        })
    }

    function getTimePeriods() {
        return dataModel.PeriodModelItems;
    }

    function demandModel() {
        return dataModel.DemandModelItems;
    }

    function processSteps() {
        return processSteps;
    }

    function siteModel() {
        return dataModel.SiteModelItems;
    }

    function workCenterModel() {
        return dataModel.WorkCenterModelItems;
    }

    function productModel() {
        return dataModel.ProductModelItems;
    }

    function fullModel() {
        return dataModel;
    }

    function processModel() {
        return dataModel.ProcessModelItems;
    }

    function init(){
        idFactory.setLastID(dataModel);
        buildOperationsWorkcenters();
        buildProductDemand()
        console.log("products with demand", dataModel.ProductModelItems)
        console.log("lastID plust 1", idFactory.getID());
    }

    init();
    return service;

}