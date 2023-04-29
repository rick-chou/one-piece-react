import type echarts from 'echarts';
import { timestampToDateString } from './date';

const renderItem = (
  params: echarts.TooltipComponentFormatterCallbackParams,
  key: string,
  value: string | number | boolean,
) => {
  if (!(params instanceof Array)) {
    if (value !== undefined && value?.toString()?.trim() !== '') {
      return `
         <div class="flex items-center mt-1">
         ${params.marker as string}
         <span class="ml-2 font-sans text-sm text-gray-700">
           ${key} : ${value.toString()} 
         </span>
       </div>
     `;
    }
  }

  return '';
};

/**
 * @since 1.0.0
 * @inner
 */
export const formatTimeStatusChartTooltip = (
  params: echarts.TooltipComponentFormatterCallbackParams,
  title?: string,
) => {
  if (!(params instanceof Array)) {
    const value = params.value as any[];
    return `
    <div style="margin: 0px 0 0; line-height: 1">
      <div style="font-size: 14px; font-weight: 400; line-height: 1" class="text-gray-900 font-sans">
        ${title ? `${title} ( ${params.name} )` : params.name}
      </div>
      <div style="margin: 10px 0 0; line-height: 1">
        <div style="margin: 0px 0 0; line-height: 1">
          <div style="margin: 0px 0 0; line-height: 1">
            ${renderItem(params, 'start', timestampToDateString(value[1]))}
            ${renderItem(params, 'end', timestampToDateString(value[2]))}
          </div>
        </div>
      </div>
    </div>
  `;
  }

  return '';
};
