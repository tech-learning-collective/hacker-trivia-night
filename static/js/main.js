/**
 * Main JavaScript file.
 */
(function () {

    /**
     * Google Chart integration.
     *
     * @see https://developers.google.com/chart/
     */

    // Load the Visualization API and the corechart package.
    google.charts.load('current', {
        'packages': [
            'corechart',
            'table'
        ]
    });
    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawGoogleCharts);

    /**
     * Callback that creates and populates the Google Chart elements.
     */
    function drawGoogleCharts () {
        var charts = document.querySelectorAll('.google-chart');
        charts.forEach(function (c) {
            var spreadsheet = c.dataset.spreadsheet;
            var sheetName   = c.dataset.sheet;
            var queryString = c.dataset.query;
            var headers     = c.dataset.headers

            var url = 'https://docs.google.com/spreadsheets/d/' + spreadsheet
                + '/gviz/tq?sheet=' + sheetName + '&tq=' + queryString
            if (c.dataset.headers) {
                url += '&headers=' + c.dataset.headers;
            }

            var query = new google.visualization.Query(url);
            query.send(function (response) {
                handleQueryResponse(response, c);
            });
        });
    }

    /**
     * Callback to run when a Google Query Language response is received.
     *
     * @param response
     * @param element The DOM node in which to draw the chart.
     */
    function handleQueryResponse (response, element) {
        if (response.isError()) {
            console.log('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
            return;
        }

        var data = response.getDataTable();
        var opts = (element.dataset.options)
            ? JSON.parse(element.dataset.options)
            : {};
        opts.title = element.getAttribute('title');
        var chart;
        switch (element.dataset.chart) {
            case 'column':
                chart = new google.visualization.ColumnChart(element);
                break;
            case 'table':
                chart = new google.visualization.Table(element);
                break;
        }

        var fmt = (element.dataset.format)
            ? JSON.parse(element.dataset.format)
            : false;
        if (fmt) {
            fmt.forEach(function (f) {
                var formatter;
                switch (f.type) {
                    case 'number':
                        formatter = new google.visualization.NumberFormat(f.opts);
                        break;
                }
                if (formatter) {
                    formatter.format(data, f.colIndex);
                }
            });
        }

        chart.draw(data, opts);
    }

})();
