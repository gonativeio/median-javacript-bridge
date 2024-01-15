import { CallbackData, CallbackParams } from '../types';
import { addCommandCallback } from '../utils';

type BranchParamsItem = number | number[] | string | string[];
type BranchParamsData = Record<string, BranchParamsItem | Record<string, BranchParamsItem>>;

export type BranchInitializedData = CallbackData & {
  data?: BranchParamsData;
};

const branch = {
  getFirstParams: function (params: CallbackParams<BranchParamsData>) {
    return addCommandCallback<BranchParamsData>('median://branch/getFirstParams', params);
  },
  getLatestParams: function (params: CallbackParams<BranchParamsData>) {
    return addCommandCallback<BranchParamsData>('median://branch/getLatestParams', params);
  },
};

export default branch;
