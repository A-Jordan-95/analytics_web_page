console.log("global.js file accessed");
var regionListData = [];
var opsysListData = [];
var uniquevisitorsListData = [];

$(document).ready(function() {
    console.log("calling populate tables...");
    populateTables();
});

function populateTables() {
    console.log("Calling populateRegions()...");
    populateRegions();
    console.log("Calling populateOpsystems()...");
    populateOpsystems();
    console.log("Calling populateUniqVisitors()...");
    populateUniqVisitors();
}

function populateRegions() {
    console.log("should be populating region data...");
    var tableContent = '';

    $.getJSON( '/regionlist', function( data ) {
        $.each(data, function() {
            tableContent += '<tr>';
            if (this.Name) {
                tableContent += '<td>' + this.Name +'</td>';
            }
            else {
                tableContent += '<td>' + this.name + '</td>';
            }
            tableContent += '<td>' + this.VisCount + '</td>';
            tableContent += '<td>' + this.VisPercent + '</td>';
            tableContent += '</tr>';
        });
        $('#regionList table tbody').html(tableContent);
    });
}

function populateOpsystems() {
    console.log("should be populating opsys data...");
    var tableContent = '';

    $.getJSON( '/opsyslist', function( data ) {
        $.each(data, function() {
            tableContent += '<tr>';
            tableContent += '<td>' + this.Name +'</td>';
            tableContent += '<td>' + this.VisCount + '</td>';
            tableContent += '<td>' + this.VisPercent + '</td>';
            tableContent += '</tr>';
        });
        $('#opsysList table tbody').html(tableContent);
    });
}

function populateUniqVisitors() {
    console.log("should be populating visitor data...");
    var tableContent = '';

    $.getJSON( '/uniquevisitors', function( data ) {
        $.each(data, function() {
            tableContent += '<tr>';
            tableContent += '<td>' + this.UniqueVisitors +'</td>';
            tableContent += '</tr>';
        });
        $('#uniqVisList table tbody').html(tableContent);
    });
}