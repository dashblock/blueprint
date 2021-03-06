/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
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

export * from "./abstractComponent";
export * from "./abstractComponent2";
export * from "./abstractPureComponent";
export * from "./abstractPureComponent2";
export * from "./alignment";
export * from "./boundary";
export * from "./colors";
export * from "./constructor";
export * from "./elevation";
export * from "./intent";
export * from "./position";
export * from "./props";
export * from "./refs";

import * as Classes from "./classes";
import * as Keys from "./keys";
import { getRef } from "./refs";
import * as Utils from "./utils";

/**
 * Utils.getRef() was added to the public API in @blueprintjs/core@3.27.0,
 * but ref utils were refactored in the next version. We keep this additional
 * export around for backwards compatibility.
 * @see https://github.com/palantir/blueprint/pull/4140
 */
(Utils as any).getRef = getRef;

export { Classes, Keys, Utils };
// NOTE: Errors is not exported in public API
