/**
   * TODO(developer): Uncomment this variable and replace with your
   *   Google Analytics 4 property ID before running the sample.
   */
  const propertyId = '433823365'

  // Imports the Google Analytics Data API client library.
  import { BetaAnalyticsDataClient } from "@google-analytics/data";

  // Using a default constructor instructs the client to use the credentials
  // specified in GOOGLE_APPLICATION_CREDENTIALS environment variable.
  const analyticsDataClient = new BetaAnalyticsDataClient();

  // Runs a simple report.
  export default async function runReport() {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: '2020-03-31',
          endDate: 'today',
        },
      ],
      dimensions: [
        {
          name: 'dateHourMinute',
        },
      ],
      metrics: [
        {
          name: 'activeUsers',
        }
      ],
    });

    console.log('Report result:', response);
    return 'Report result \n' + JSON.stringify(response)
    // response.rows.forEach(row => {
      // console.log(row.dimensionValues[0], row.metricValues[0]);
    // });
  }