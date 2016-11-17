/* Copyright IBM Corp. 2015
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

module.exports = {

  // MongoDB
  database: {
    url : process.env.MONGODB ||"mongodb://c847809c-9ab4-43e7-b50a-50af4cb6c88a:3955b5f3-e2ec-41f3-8672-80b6b1224a9c@192.155.247.230:10168/db"
  },

  tradeoff_analytics : {
    username : process.env.TRADEOFF_ANALYTICS_USERNAME || '8d2bf472-1931-4e97-8c02-2c63a5c03758',
    password : process.env.TRADEOFF_ANALYTICS_PASSWORD || 'dGQnCI3bE62r',
    version  : 'v1'
  },

  personality_insights : {
    username : process.env.PERSONALITY_INSIGHTS_USERNAME || 'b252ad6b-f56a-4ca8-ae28-e39910451a70',
    password : process.env.PERSONALITY_INSIGHTS_PASSWORD || '0HaqjdnKl8z6',
    version  : 'v2'
  },

  // Twitter app credentials: https://apps.twitter.com/app
  twitter: process.env.TWITTER ? JSON.parse(process.env.TWITTER) : [
    {
      consumer_key :        'mVz1Tfeuecui5Wr7s6OcWOtTM',
      consumer_secret  :    'uE3BwrkyxkjETsa0TthJb4IYjSkUPzEdboyxdTDDzzdmjavFmS',
      access_token_key :    '143414204-Gs9Zon3JQZMaYqkN5kK9ZIYQDqtz20MajeaRNzj5',
      access_token_secret : 'ayL6TgPa8vGDhqXvWxv12wSuA3BItPcu2TQLWUC71R9qH',
      enabled : true // Disabled since this is just an example
    }
  ]
};
