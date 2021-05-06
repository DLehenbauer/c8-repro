/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

import { mount } from 'enzyme';
import * as React from 'react';
import { InspectorTable } from '../src/InspectorTable';

export const mountInspectorTable = () => {
  const table = (
    <InspectorTable/>
  );

  return mount(table);
};
