/**
 * vf-OS relational storage service
 * This is the vf-OS service for storing relational data. 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: osaiz@ikerlan.es
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */



let ApiClient = require("../../api_client");
let Error = require('../model/Error');

let ListOfRowsAndError = require('../model/ListOfRowsAndError');

/**
 * Rows service.
 * @module api/RowsApi
 * @version 1.0.0
 */
let RowsApi = function () {

  /**
   * Constructs a new RowsApi. 
   * @alias module:api/RowsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  this.apiClient = ApiClient;
  this.init = function (apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }


  /**
   * Callback function to receive the result of the deleteRows operation.
   * @callback module:api/RowsApi~deleteRowsCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Error} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Deletes a set of rows in a table of given relational database.
   * @param {String} databaseName Database name
   * @param {String} tableName Table name
   * @param {String} authorization Http Basic authorization
   * @param {Object} opts Optional parameters
   * @param {String} opts.filter (Optional). Filter of the rows. It will be an string specifying the WHERE clause of the delete. If not specified, all the rows will be deleted. Example    col1 &gt; 0
   * @param {module:api/RowsApi~deleteRowsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Error}
   */
  this.deleteRows = function (databaseName, tableName, authorization, opts, callback) {
    opts = opts || {};
    let postBody = null;

    // verify the required parameter 'databaseName' is set
    if (databaseName === undefined || databaseName === null) {
      throw new Error("Missing the required parameter 'databaseName' when calling deleteRows");
    }

    // verify the required parameter 'tableName' is set
    if (tableName === undefined || tableName === null) {
      throw new Error("Missing the required parameter 'tableName' when calling deleteRows");
    }

    // verify the required parameter 'authorization' is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter 'authorization' when calling deleteRows");
    }


    let pathParams = {
      'databaseName': databaseName,
      'tableName': tableName
    };
    let queryParams = {
      'filter': opts['filter']
    };
    let headerParams = {
      'Authorization': authorization
    };
    let formParams = {};

    let authNames = ['basicAuth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = Error;

    return this.apiClient.callApi(
      '/databases/{databaseName}/tables/{tableName}/rows', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Callback function to receive the result of the insertRows operation.
   * @callback module:api/RowsApi~insertRowsCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Error} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Inserts rows in a table in a given relational database.
   * @param {String} databaseName Database name
   * @param {String} tableName Table name
   * @param {Object} rowsDef List of rows. The format is a JSON array. Each element must be in the format column_name:value. For instance [{\&quot;col1\&quot;:\&quot;value11\&quot;, \&quot;col2\&quot;:\&quot;value21\&quot;},{\&quot;col1\&quot;:\&quot;value21\&quot;, \&quot;col2\&quot;:\&quot;value22\&quot;}]
   * @param {String} authorization Http Basic authorization
   * @param {module:api/RowsApi~insertRowsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Error}
   */
  this.insertRows = function (databaseName, tableName, rowsDef, authorization, callback) {
    let postBody = rowsDef;

    // verify the required parameter 'databaseName' is set
    if (databaseName === undefined || databaseName === null) {
      throw new Error("Missing the required parameter 'databaseName' when calling insertRows");
    }

    // verify the required parameter 'tableName' is set
    if (tableName === undefined || tableName === null) {
      throw new Error("Missing the required parameter 'tableName' when calling insertRows");
    }

    // verify the required parameter 'rowsDef' is set
    if (rowsDef === undefined || rowsDef === null) {
      throw new Error("Missing the required parameter 'rowsDef' when calling insertRows");
    }

    // verify the required parameter 'authorization' is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter 'authorization' when calling insertRows");
    }


    let pathParams = {
      'databaseName': databaseName,
      'tableName': tableName
    };
    let queryParams = {};
    let headerParams = {
      'Authorization': authorization
    };
    let formParams = {};

    let authNames = ['basicAuth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = Error;

    return this.apiClient.callApi(
      '/databases/{databaseName}/tables/{tableName}/rows', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Callback function to receive the result of the mergeRows operation.
   * @callback module:api/RowsApi~mergeRowsCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Error} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Updates a set of rows updating the selected properties and keeping the values of the not selected ones.
   * @param {String} databaseName Database name
   * @param {String} tableName Table name
   * @param {Object} rowValues List of values to be updated. The format is e an JSON set of column_name:value. For instance {\&quot;col1\&quot;:\&quot;value11\&quot;, \&quot;col2\&quot;:\&quot;value21\&quot;}
   * @param {String} authorization Http Basic authorization
   * @param {Object} opts Optional parameters
   * @param {String} opts.filter (Optional). Filter of the rows. It will be an string specifying the WHERE clause of the update. If not specified, all the rows will be updated. Example    col1 &gt; 0
   * @param {module:api/RowsApi~mergeRowsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Error}
   */
  this.mergeRows = function (databaseName, tableName, rowValues, authorization, opts, callback) {
    opts = opts || {};
    let postBody = rowValues;

    // verify the required parameter 'databaseName' is set
    if (databaseName === undefined || databaseName === null) {
      throw new Error("Missing the required parameter 'databaseName' when calling mergeRows");
    }

    // verify the required parameter 'tableName' is set
    if (tableName === undefined || tableName === null) {
      throw new Error("Missing the required parameter 'tableName' when calling mergeRows");
    }

    // verify the required parameter 'rowValues' is set
    if (rowValues === undefined || rowValues === null) {
      throw new Error("Missing the required parameter 'rowValues' when calling mergeRows");
    }

    // verify the required parameter 'authorization' is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter 'authorization' when calling mergeRows");
    }


    let pathParams = {
      'databaseName': databaseName,
      'tableName': tableName
    };
    let queryParams = {
      'filter': opts['filter']
    };
    let headerParams = {
      'Authorization': authorization
    };
    let formParams = {};

    let authNames = ['basicAuth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = Error;

    return this.apiClient.callApi(
      '/databases/{databaseName}/tables/{tableName}/rows', 'PATCH',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Callback function to receive the result of the queryRows operation.
   * @callback module:api/RowsApi~queryRowsCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ListOfRowsAndError} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Queries a table or view of a relational database.
   * @param {String} databaseName Database name
   * @param {String} tableName Table or view name
   * @param {String} authorization Http Basic authorization
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.queryColumnsSpecification (Optional). Specification of the columns to be returned in the query. The columns can be real column names or aggregation expressions (MAX, MIN, AVG...). If not specified, all the colums in the table/view will be returned.  Example    max(colint) as maximum
   * @param {String} opts.filter (Optional). Filter of the rows. It will be an string specifying the WHERE clause of the select. If not specified, all the rows will be selected. Example    col1 &gt; 0
   * @param {Number} opts.skip (Optional). Specifies the first number of results to be ignored (not returned). Used usually for pagination.
   * @param {Number} opts.limit (Optional). Specifies the maximum number of results to be returned.
   * @param {Array.<String>} opts.groupBy (Optional). Creates a group for each combination of column expressions. It will be an string specifying the GROUP BY clause of the select.
   * @param {String} opts.having (Optional). Specifies a search condition for a group or an aggregate. It will be an string specifying the HAVING clause of the select.
   * @param {Array.<String>} opts.orderBy (Optional). Order criteria of the rows. It will be an string specifying the ORDER BY clause of the select.
   * @param {module:api/RowsApi~queryRowsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ListOfRowsAndError}
   */
  this.queryRows = function (databaseName, tableName, authorization, opts, callback) {
    opts = opts || {};
    let postBody = null;

    // verify the required parameter 'databaseName' is set
    if (databaseName === undefined || databaseName === null) {
      throw new Error("Missing the required parameter 'databaseName' when calling queryRows");
    }

    // verify the required parameter 'tableName' is set
    if (tableName === undefined || tableName === null) {
      throw new Error("Missing the required parameter 'tableName' when calling queryRows");
    }

    // verify the required parameter 'authorization' is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter 'authorization' when calling queryRows");
    }


    let pathParams = {
      'databaseName': databaseName,
      'tableName': tableName
    };
    let queryParams = {
      'query_columns_specification': this.apiClient.buildCollectionParam(opts['queryColumnsSpecification'], 'multi'),
      'filter': opts['filter'],
      'skip': opts['skip'],
      'limit': opts['limit'],
      'group_by': this.apiClient.buildCollectionParam(opts['groupBy'], 'multi'),
      'having': opts['having'],
      'order_by': this.apiClient.buildCollectionParam(opts['orderBy'], 'multi')
    };
    let headerParams = {
      'Authorization': authorization
    };
    let formParams = {};

    let authNames = ['basicAuth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = ListOfRowsAndError;

    return this.apiClient.callApi(
      '/databases/{databaseName}/tables/{tableName}/rows', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }


}


module.exports = new RowsApi();