/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

import {
  mountInspectorTable,
} from './testUtils';

describe('InspectorTable', () => {
  describe('noDataPanel', () => {
    it('should show empty data panel if no data is passed',
      () => {
        // Mount table with empty data but data creation enabled
        mountInspectorTable();
      });
  });
});
