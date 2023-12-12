/* eslint-disable @typescript-eslint/naming-convention */
import { isArray } from 'lodash';
import { timestampToDateString } from './date';

export const renderItem = (
  params: any,
  key: string,
  value: string | number | boolean,
) => {
  if (value !== undefined && value?.toString()?.trim() !== '') {
    return `
         <div class="flex items-center mt-1">
         ${params?.marker}
         <span class="ml-2 font-sans text-sm text-gray-700">
           ${key} : ${value.toString()} 
         </span>
       </div>
     `;
  }

  return '';
};

export const format_time_status_chart_tooltip = (
  params: any,
  title?: string,
) => {
  let start = params.value[1];
  let end = params.value[2];
  if (params.seriesType === 'scatter') {
    start = params.value[0];
    end = params.value[0];
  }

  return `
    <div style="margin: 0px 0 0; line-height: 1">
      <div style="font-size: 14px; font-weight: 400; line-height: 1" class="text-gray-900 font-sans">
        ${title ? `${title} ( ${params.name} )` : params.name}
      </div>
      <div style="margin: 10px 0 0; line-height: 1">
        <div style="margin: 0px 0 0; line-height: 1">
          <div style="margin: 0px 0 0; line-height: 1">
            ${renderItem(params, 'start', timestampToDateString(start))}
            ${renderItem(params, 'end', timestampToDateString(end))}
          </div>
        </div>
      </div>
    </div>
  `;
};

export const format_line_tooltip = (_params: any) => {
  const params = isArray(_params) ? _params : [_params];
  let toolTipHtml = `<div style="margin: 0px 0 0; line-height: 1">
                        <div style="margin: 0px 0 0; line-height: 1">
                          <div style="font-size: 14px; color: #666; font-weight: 400; line-height: 1">
                              ${timestampToDateString(params[0].axisValue)}
                          </div>
                        <div style="margin: 10px 0 0; line-height: 1">
                    `;
  params.forEach((item: any, idx: number) => {
    toolTipHtml += `<div style="margin: 0px 0 0; line-height: 1">
                        <div style="margin: 0px 0 0; line-height: 1">
                          ${item.marker}
                          <span style="font-size: 14px; color: #666; font-weight: 400; margin-left: 2px">
                            ${item.seriesName}
                          </span>
                          <span style="float: right; margin-left: 20px; font-size: 14px; color: #666; font-weight: 900">
                            ${item.value[1]}
                          </span>
                        <div style="clear: both"></div>
                      </div>
                      <div style="clear: both;margin-bottom: ${
                        idx === params.length - 1 ? 0 : '10px'
                      }"></div>
                    </div>`;
  });
  toolTipHtml += `<div style="clear: both"></div>
                </div>
              </div>
            </div>
                 `;

  return toolTipHtml;
};
