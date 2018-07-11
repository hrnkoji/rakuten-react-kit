/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/domain/middleware/user.js
 *
 * This file represents the 'user actor' in your application.
 * It contains handlers which dispatch all actions as a result of user events.
 */

// @flow

import getLogger from 'domain/logger';

import { store, state } from 'domain/store/main';
import { updateFilteredItemsAction } from 'domain/store/actions/main';

import type { Item } from 'domain/store/state/main';

const logger = getLogger('Middleware/user');

function filterByName(name: string): Array<Item> {
  const allItems = state().allItems;
  if (name.length > 0) {
    const searchWordsArray = name.replace(/^[\s]+|[\s]+$/g, '').split(/\s/);
    return allItems.filter(item => {
      const results = searchWordsArray.map(word => item.name.search(new RegExp(word, 'i')));
      return results.every(result => result !== -1);
    });
  }
  return allItems;
}

export default function onChangeIncrementalSearch(name: string): void {
  logger.debug('Incremental Search By Name');
  store.dispatch(updateFilteredItemsAction(filterByName(name)));
}

/*
 * EOF: src/domain/middleware/user.js
 */
