/**
 * Copyright 2020 NEM Foundation (https://nem.io)
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
import {NetworkType} from 'nem2-sdk'
import {Component, Provide, Vue} from 'vue-property-decorator'
import {mapGetters} from 'vuex'

// internal dependencies
import {Electron} from '@/core/utils/electron'
import {AccountsModel} from '@/core/database/entities/AccountsModel'

// child components
// @ts-ignore
import AppLogo from '@/components/AppLogo/AppLogo.vue'
// @ts-ignore
import ErrorTooltip from '@/components/ErrorTooltip/ErrorTooltip.vue'
// @ts-ignore
import PageNavigator from '@/components/PageNavigator/PageNavigator.vue'
// @ts-ignore
import WindowControls from '@/components/WindowControls/WindowControls.vue'
// @ts-ignore
import PeerSelector from '@/components/PeerSelector/PeerSelector.vue'
// @ts-ignore
import LanguageSelector from '@/components/LanguageSelector/LanguageSelector.vue'
// @ts-ignore
import WalletSelector from '@/components/WalletSelector/WalletSelector.vue'


@Component({
  components: {
    AppLogo,
    ErrorTooltip,
    PageNavigator,
    WindowControls,
    PeerSelector,
    LanguageSelector,
    WalletSelector,
  },
  computed: {
    ...mapGetters({
      currentPeer: 'network/currentPeer',
      isConnected: 'network/isConnected',
      networkType: 'network/networkType',
      currentAccount: 'account/currentAccount',
      currentLanguage: 'app/currentLanguage',
    }),
  },
})
export class PageLayoutTs extends Vue {
  @Provide() validator: any = this.$validator

  /**
   * Whether the app is running on windows platform
   * @var {boolean}
   */
  public isWindows = process.platform === 'win32'

  /**
   * Currently active account
   * @see {Store.Account}
   * @var {string}
   */
  public currentAccount: AccountsModel

  /**
   * Currently active peer
   * @see {Store.Network}
   * @var {Object}
   */
  public currentPeer: Object

  /**
   * Whether the connection is up
   * @see {Store.Network}
   * @var {boolean}
   */
  public isConnected: boolean

  /**
   * Current networkType
   * @see {Store.Network}
   * @var {NetworkType}
   */
  public networkType: NetworkType

/// region computed properties getter/setter
  /**
   * Holds alert message
   * @var {Object}
   */
  get alert(): {show: boolean, message: string} {
    if (! this.currentPeer || ! this.isConnected) {
      return {show: true, message: 'Node_not_available_please_check_your_node_or_network_settings'}
    }

    if (this.currentAccount && this.currentAccount.values.get('networkType') !== this.networkType) {
      return {show: true, message: 'Wallet_network_type_does_not_match_current_network_type'}
    }

    return {show: false, message: ''}
  }
/// end-region computed properties getter/setter

  /**
   * Hook called when the layout is created (used)
   * @return {void}
   */
  created() {
    if (process.platform === 'win32')
      Electron.windowSizeChange()
  }
}
