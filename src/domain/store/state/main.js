/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/domain/store/state/main.js
 * This file is contains our application state and type definitions.
 */

// @flow

export type HomePage = { name: "HOME_PAGE" };
export type DetailPage = { name: "DETAIL_PAGE" };
export type FormPage = { name: "FORM_PAGE" };
export type Page = HomePage | DetailPage | FormPage;
export type Item = { name: string, url: string };
export type DetailItem = {
  name: string,
  height: number,
  weight: number,
  sprites: {
    frontDefault: string
  }
};
export type DetailItemFromNetwork = {
  sprites: {
    front_default: string
  }
};
export type State = {
  currentPage: Page,
  allItems: Array<Item>,
  filteredItems: Array<Item>,
  detail: DetailItem,
  form: any
};

export const defaultState = {
  currentPage: { name: "HOME_PAGE" },
  allItems: [],
  filteredItems: [],
  form: {},
  detail: {
    name: "",
    height: 0,
    weight: 0,
    sprites: {
      frontDefault: ""
    }
  }
};

/*
 * EOF: src/domain/store/state/main.js
 */
