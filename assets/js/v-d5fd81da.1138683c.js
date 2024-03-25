"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[97789],{221849:(e,o,t)=>{t.r(o),t.d(o,{data:()=>i});const i=JSON.parse('{"key":"v-d5fd81da","path":"/devices/9GED21500-005.html","title":"Weiser 9GED21500-005 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Weiser 9GED21500-005 control via MQTT","description":"Integrate your Weiser 9GED21500-005 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-01-14T19:34:25.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Lock","slug":"lock","link":"#lock","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Pin code (composite)","slug":"pin-code-composite","link":"#pin-code-composite","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Action source name (enum)","slug":"action-source-name-enum","link":"#action-source-name-enum","children":[]},{"level":3,"title":"Action user (numeric)","slug":"action-user-numeric","link":"#action-user-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1711399067000},"filePathRelative":"devices/9GED21500-005.md"}')},935361:(e,o,t)=>{t.r(o),t.d(o,{default:()=>g});var i=t(166252);const c=(0,i._)("h1",{id:"weiser-9ged21500-005",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#weiser-9ged21500-005","aria-hidden":"true"},"#"),(0,i.Uk)(" Weiser 9GED21500-005")],-1),d=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),a=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"9GED21500-005")],-1),n=(0,i._)("td",null,"Vendor",-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"SmartCode 10 Touch")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"lock (state, lock_state), battery, pin_code, action, action_source_name, action_user, linkquality")],-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/9GED21500-005.png",alt:"Weiser 9GED21500-005"})])],-1),u=(0,i._)("h2",{id:"notes",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,i.Uk)(" Notes")],-1),h=(0,i._)("p",null,"Pairing may be hindered by the lock attempting to join multiple times in succession, causing it to be kicked off the network after it joins. To work around this, pull the battery pack immediately after it joins. Upon powering up again, the device will remain on the network.",-1),p=(0,i._)("p",null,"Because the PIN code is a numeric in the UI and not a string, it's not possible to set pin codes via UI that start with a zero (e.g. 0999 will be sent to the lock as 999). As a workaround, you can bypass the Z2M UI and publish an MQTT message manually as above with the pin code passed as a string.",-1),m=(0,i._)("p",null,"year|week_day_schedule do not appear to be supported by this lock.",-1),_=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),k=(0,i.uE)('<ul><li><code>expose_pin</code>: Expose pin of this lock in the published payload (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="lock" tabindex="-1"><a class="header-anchor" href="#lock" aria-hidden="true">#</a> Lock</h3><p>The current state of this lock is in the published state under the <code>state</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;state&quot;: &quot;UNLOCK&quot;}</code>. To read the current state of this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>. This lock exposes a lock state which can be found in the published state under the <code>lock_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>not_fully_locked</code>, <code>locked</code>, <code>unlocked</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="pin-code-composite" tabindex="-1"><a class="header-anchor" href="#pin-code-composite" aria-hidden="true">#</a> Pin code (composite)</h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pin_code&quot;: {&quot;user&quot;: VALUE, &quot;user_type&quot;: VALUE, &quot;user_enabled&quot;: VALUE, &quot;pin_code&quot;: VALUE}}</code> To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;pin_code&quot;: &quot;&quot;}</code>.</p><ul><li><code>user</code> (numeric): User ID to set or clear the pincode for</li><li><code>user_type</code> (enum): Type of user, unrestricted: owner (default), (year|week)_day_schedule: user has ability to open lock based on specific time period, master: user has ability to both program and operate the door lock, non_access: user is recognized by the lock but does not have the ability to open the lock allowed values: <code>unrestricted</code>, <code>year_day_schedule</code>, <code>week_day_schedule</code>, <code>master</code>, <code>non_access</code></li><li><code>user_enabled</code> (binary): Whether the user is enabled/disabled allowed values: <code>true</code> or <code>false</code></li><li><code>pin_code</code> (numeric): Pincode to set, set pincode to null to clear</li></ul><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action on the lock. Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>unknown</code>, <code>lock</code>, <code>unlock</code>, <code>lock_failure_invalid_pin_or_id</code>, <code>lock_failure_invalid_schedule</code>, <code>unlock_failure_invalid_pin_or_id</code>, <code>unlock_failure_invalid_schedule</code>, <code>one_touch_lock</code>, <code>key_lock</code>, <code>key_unlock</code>, <code>auto_lock</code>, <code>schedule_lock</code>, <code>schedule_unlock</code>, <code>manual_lock</code>, <code>manual_unlock</code>, <code>non_access_user_operational_event</code>.</p><h3 id="action-source-name-enum" tabindex="-1"><a class="header-anchor" href="#action-source-name-enum" aria-hidden="true">#</a> Action source name (enum)</h3><p>Source of the triggered action on the lock. Value can be found in the published state on the <code>action_source_name</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>keypad</code>, <code>rfid</code>, <code>manual</code>, <code>rf</code>.</p><h3 id="action-user-numeric" tabindex="-1"><a class="header-anchor" href="#action-user-numeric" aria-hidden="true">#</a> Action user (numeric)</h3><p>ID of user that triggered the action on the lock. Value can be found in the published state on the <code>action_user</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',17),b={},g=(0,t(983744).Z)(b,[["render",function(e,o){const t=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),c,(0,i._)("table",null,[d,(0,i._)("tbody",null,[a,(0,i._)("tr",null,[n,(0,i._)("td",null,[(0,i.Wm)(t,{to:"/supported-devices/#v=Weiser"},{default:(0,i.w5)((()=>[(0,i.Uk)("Weiser")])),_:1})])]),l,s,r])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,h,p,m,(0,i.kq)(" Notes END: Do not edit below this line "),_,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),k])}]])}}]);