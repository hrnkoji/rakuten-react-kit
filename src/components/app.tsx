/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/components/app.jsx
 * This file defines the 'app' component and how it will be rendered.
 */

// @flow

import * as React from "react";
import { State } from "domain/store/state/main";

import { List } from "components/list";
import { Detail } from "components/detail";
import { detailRoute } from "domain/middleware/router";
import { onChangeIncrementalSearch } from "domain/middleware/user";

export function App({ state } : { state: State} ) {

  const currentPageName = state.currentPage.name;
  const content = ((pageName) => {
    switch (pageName) {
      case 'HOME_PAGE':
        const list = state.filteredItems;
        return <List list={list} onChangeText={onChangeIncrementalSearch} detailRoute={detailRoute} />;
      case 'DETAIL_PAGE':
        const detail = state.detail;
        return <Detail detail={detail} />;
      default:
        return <p>Page not found</p>;
    }
  })(currentPageName);

  return (
    <div>
      { content }
    </div>
  );
}
