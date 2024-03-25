"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[4975],{619025:(t,e,o)=>{o.r(e),o.d(e,{data:()=>i});const i=JSON.parse('{"key":"v-15ca2b3f","path":"/devices/ZYXH.html","title":"TuYa ZYXH control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa ZYXH control via MQTT","description":"Integrate your TuYa ZYXH via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-08-01T15:13:29.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch (l1 endpoint)","slug":"switch-l1-endpoint","link":"#switch-l1-endpoint","children":[]},{"level":3,"title":"Switch (l2 endpoint)","slug":"switch-l2-endpoint","link":"#switch-l2-endpoint","children":[]},{"level":3,"title":"Switch (l3 endpoint)","slug":"switch-l3-endpoint","link":"#switch-l3-endpoint","children":[]},{"level":3,"title":"Switch (l4 endpoint)","slug":"switch-l4-endpoint","link":"#switch-l4-endpoint","children":[]},{"level":3,"title":"Switch (l5 endpoint)","slug":"switch-l5-endpoint","link":"#switch-l5-endpoint","children":[]},{"level":3,"title":"Switch (l6 endpoint)","slug":"switch-l6-endpoint","link":"#switch-l6-endpoint","children":[]},{"level":3,"title":"Switch (l7 endpoint)","slug":"switch-l7-endpoint","link":"#switch-l7-endpoint","children":[]},{"level":3,"title":"Switch (l8 endpoint)","slug":"switch-l8-endpoint","link":"#switch-l8-endpoint","children":[]},{"level":3,"title":"Switch (l9 endpoint)","slug":"switch-l9-endpoint","link":"#switch-l9-endpoint","children":[]},{"level":3,"title":"Switch (l10 endpoint)","slug":"switch-l10-endpoint","link":"#switch-l10-endpoint","children":[]},{"level":3,"title":"Switch (l11 endpoint)","slug":"switch-l11-endpoint","link":"#switch-l11-endpoint","children":[]},{"level":3,"title":"Switch (l12 endpoint)","slug":"switch-l12-endpoint","link":"#switch-l12-endpoint","children":[]},{"level":3,"title":"Switch (l13 endpoint)","slug":"switch-l13-endpoint","link":"#switch-l13-endpoint","children":[]},{"level":3,"title":"Switch (l14 endpoint)","slug":"switch-l14-endpoint","link":"#switch-l14-endpoint","children":[]},{"level":3,"title":"Switch (l15 endpoint)","slug":"switch-l15-endpoint","link":"#switch-l15-endpoint","children":[]},{"level":3,"title":"Switch (l16 endpoint)","slug":"switch-l16-endpoint","link":"#switch-l16-endpoint","children":[]},{"level":3,"title":"Switch (l17 endpoint)","slug":"switch-l17-endpoint","link":"#switch-l17-endpoint","children":[]},{"level":3,"title":"Switch (l18 endpoint)","slug":"switch-l18-endpoint","link":"#switch-l18-endpoint","children":[]},{"level":3,"title":"Switch (l19 endpoint)","slug":"switch-l19-endpoint","link":"#switch-l19-endpoint","children":[]},{"level":3,"title":"Switch (l20 endpoint)","slug":"switch-l20-endpoint","link":"#switch-l20-endpoint","children":[]},{"level":3,"title":"Switch (l21 endpoint)","slug":"switch-l21-endpoint","link":"#switch-l21-endpoint","children":[]},{"level":3,"title":"Switch (l22 endpoint)","slug":"switch-l22-endpoint","link":"#switch-l22-endpoint","children":[]},{"level":3,"title":"Switch (l23 endpoint)","slug":"switch-l23-endpoint","link":"#switch-l23-endpoint","children":[]},{"level":3,"title":"Switch (l24 endpoint)","slug":"switch-l24-endpoint","link":"#switch-l24-endpoint","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1711399067000},"filePathRelative":"devices/ZYXH.md"}')},709190:(t,e,o)=>{o.r(e),o.d(e,{default:()=>p});var i=o(166252);const d=(0,i._)("h1",{id:"tuya-zyxh",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#tuya-zyxh","aria-hidden":"true"},"#"),(0,i.Uk)(" TuYa ZYXH")],-1),c=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"ZYXH")],-1),l=(0,i._)("td",null,"Vendor",-1),h=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"24 gang switch")],-1),n=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"switch (state), linkquality")],-1),a=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZYXH.png",alt:"TuYa ZYXH"})])],-1),u=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l1-endpoint" aria-hidden="true">#</a> Switch (l1 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l1</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l1&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l1&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l1&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l2-endpoint" aria-hidden="true">#</a> Switch (l2 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l2</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l2&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l2&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l2&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l3-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l3-endpoint" aria-hidden="true">#</a> Switch (l3 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l3</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l3&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l3&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l3&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l4-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l4-endpoint" aria-hidden="true">#</a> Switch (l4 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l4</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l4&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l4&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l4&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l5-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l5-endpoint" aria-hidden="true">#</a> Switch (l5 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l5</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l5&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l5&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l5&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l6-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l6-endpoint" aria-hidden="true">#</a> Switch (l6 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l6</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l6&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l6&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l6&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l7-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l7-endpoint" aria-hidden="true">#</a> Switch (l7 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l7</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l7&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l7&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l7&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l8-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l8-endpoint" aria-hidden="true">#</a> Switch (l8 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l8</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l8&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l8&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l8&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l9-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l9-endpoint" aria-hidden="true">#</a> Switch (l9 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l9</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l9&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l9&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l9&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l10-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l10-endpoint" aria-hidden="true">#</a> Switch (l10 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l10</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l10&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l10&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l10&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l11-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l11-endpoint" aria-hidden="true">#</a> Switch (l11 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l11</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l11&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l11&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l11&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l12-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l12-endpoint" aria-hidden="true">#</a> Switch (l12 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l12</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l12&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l12&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l12&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l13-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l13-endpoint" aria-hidden="true">#</a> Switch (l13 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l13</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l13&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l13&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l13&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l14-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l14-endpoint" aria-hidden="true">#</a> Switch (l14 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l14</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l14&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l14&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l14&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l15-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l15-endpoint" aria-hidden="true">#</a> Switch (l15 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l15</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l15&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l15&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l15&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l16-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l16-endpoint" aria-hidden="true">#</a> Switch (l16 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l16</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l16&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l16&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l16&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l17-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l17-endpoint" aria-hidden="true">#</a> Switch (l17 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l17</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l17&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l17&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l17&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l18-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l18-endpoint" aria-hidden="true">#</a> Switch (l18 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l18</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l18&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l18&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l18&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l19-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l19-endpoint" aria-hidden="true">#</a> Switch (l19 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l19</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l19&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l19&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l19&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l20-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l20-endpoint" aria-hidden="true">#</a> Switch (l20 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l20</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l20&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l20&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l20&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l21-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l21-endpoint" aria-hidden="true">#</a> Switch (l21 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l21</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l21&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l21&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l21&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l22-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l22-endpoint" aria-hidden="true">#</a> Switch (l22 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l22</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l22&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l22&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l22&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l23-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l23-endpoint" aria-hidden="true">#</a> Switch (l23 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l23</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l23&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l23&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l23&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l24-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l24-endpoint" aria-hidden="true">#</a> Switch (l24 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l24</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l24&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l24&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l24&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',51),r={},p=(0,o(983744).Z)(r,[["render",function(t,e){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),d,(0,i._)("table",null,[c,(0,i._)("tbody",null,[s,(0,i._)("tr",null,[l,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=TuYa"},{default:(0,i.w5)((()=>[(0,i.Uk)("TuYa")])),_:1})])]),h,n,a])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,i.kq)(" Notes END: Do not edit below this line "),u])}]])}}]);