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
export enum NotificationType {
  ACCOUNT_NAME_EXISTS_ERROR = 'Account_name_already_exists',
  ACCOUNT_NAME_INPUT_ERROR = 'accountCreateWalletNameRemind',
  ADDRESS_ALIAS_NOT_EXIST_ERROR = 'address_alias_not_exist',
  ADDRESS_FORMAT_ERROR = 'address_format_error',
  ADDRESS_INVALID = 'address_invalid',
  ADDRESS_UNKNOWN = 'address_unknown',
  ADDRESS_UNKNOWN_BY_NETWORK = 'address_unknown_by_network',
  ALIAS_NAME_FORMAT_ERROR = 'alias_name_format_error',
  AMOUNT_LESS_THAN_0_ERROR = 'amount_can_not_be_less_than_0',
  CLICK_TO_LOAD = 'click_to_load',
  CO_SIGNER_NULL_ERROR = 'co_signers_amount_less_than_0',
  COPY_SUCCESS = 'successful_copy',
  DIVISIBILITY_INVALID = 'divisibility_invalid',
  DIVISIBILITY_LESS_THAN_0_ERROR = 'divisibility_can_not_less_than_0',
  DIVISIBILITY_MORE_THAN_6_ERROR = 'divisibility_can_not_more_than_6',
  DURATION_LESS_THAN_0_ERROR = 'duration_can_not_less_than_0',
  DURATION_MORE_THAN_1_YEARS_ERROR = 'duration_can_not_more_than_1_years',
  DURATION_MORE_THAN_10_YEARS_ERROR = 'duration_can_not_more_than_10_years',
  DURATION_VALUE_LESS_THAN_1_ERROR = 'The_value_of_duration_cannot_be_less_than_1',
  FEE_LESS_THAN_0_ERROR = 'fee_can_not_be_less_than_0',
  HD_WALLET_PATH_ERROR = 'hd_wallet_path_error',
  ILLEGAL_MIN_APPROVAL_ERROR = 'min_approval_amount_illegal',
  ILLEGAL_MIN_REMOVAL_ERROR = 'min_removal_amount_illegal',
  ILLEGAL_PUBLIC_KEY_ERROR = 'illegal_publicKey',
  ILLEGAL_publicKey_ERROR = 'ILLEGAL_publicKey_ERROR',
  INCONSISTENT_PASSWORD_ERROR = 'createLockCheckPWRemind',
  INPUT_EMPTY_ERROR = 'Any_information_cannot_be_empty',
  INVALID_NAMESPACE_OR_MOSAIC_ID = 'invalid_namespace_or_mosaic_id',
  KEYSTORE_DECRYPTION_FAILED = 'Keystore_decryption_failed',
  LOADING = 'Loading',
  MAX_APPROVAL_MORE_THAN_10_ERROR = 'max_approval_amount_more_than_10',
  MAX_REMOVAL_MORE_THAN_10_ERROR = 'max_removal_amount_more_than_10',
  MIN_APPROVAL_LESS_THAN_0_ERROR = 'min_approval_amount_less_than_0',
  MIN_REMOVAL_LESS_THAN_0_ERROR = 'min_removal_amount_less_than_0',
  MNEMONIC_GENERATION_ERROR = 'mnemonic_generation_error',
  MNEMONIC_INCONSISTENCY_ERROR = 'Mnemonic_inconsistency',
  MNEMONIC_INPUT_ERROR = 'Mnemonic_input_error',
  MOSAIC_ALIAS_NOT_EXIST_ERROR = 'mosaic_alias_not_exist',
  MOSAIC_HEX_FORMAT_ERROR = 'mosaic_hex_format_error',
  MOSAIC_LIST_NULL_ERROR = 'The_mosaic_to_be_sent_is_empty',
  MOSAIC_NAME_NULL_ERROR = 'mosaic_name_can_not_be_null',
  MOSAIC_NOT_SET = 'mosaic_not_set',
  MULTISIG_ACCOUNTS_NO_TX = 'Multisig_accounts_can_not_send_a_transaction_by_themselves',
  NAMESPACE_FORMAT_ERROR = 'Namespace_can_only_contain_numbers_letters_and_other',
  NAMESPACE_MAX_DURATION = 'The duration can not exceed 2102400 blocks (365 days)',
  NAMESPACE_NULL_ERROR = 'Namespace_cannot_be_a_null_or_empty_string',
  NAMESPACE_STARTING_ERROR = 'Namespace_must_start_with_a_letter',
  NAMESPACE_USE_BANNED_WORD_ERROR = 'Namespace_cannot_use_forbidden_words',
  NETWORK_TYPE_INVALID = 'network_type_invalid',
  NEW_AGGREGATE_BONDED = 'new_aggregate_bonded',
  NEW_COSIGNATURE = 'new_cosignature',
  NO_MNEMONIC_INFO = 'no_mnemonic',
  NO_NETWORK_CURRENCY = 'no_network_currency_alert',
  NODE_ALL_DELETED = 'all_nodes_cannot_be_deleted',
  NODE_CONNECTION_ERROR = 'Node_connection_failed',
  NODE_CONNECTION_SUCCEEDED = 'Node_connection_succeeded',
  NODE_EXISTS_ERROR = 'node_exists_error',
  NODE_NULL_ERROR = 'point_null_error',
  NOTES_SHOULD_NOT_EXCEED_25_CHARACTER = 'Notes_should_not_exceed_25_character',
  OPERATION_FAILED_ERROR = 'operation_failed',
  OPERATION_SUCCESS = 'successful_operation',
  PASSWORD_CREATE_ERROR = 'createLockPWRemind',
  PASSWORD_HIT_SETTING_ERROR = 'createLockPWTxtRemind',
  PASSWORD_SETTING_INPUT_ERROR = 'walletCreatePasswordRemind',
  PASSWORDS_NOT_MATCHING = 'passwords_not_matching',
  PLEASE_ENTER_A_CORRECT_NUMBER = 'Please_enter_a_correct_number',
  PLEASE_ENTER_MNEMONIC_INFO = 'Please_enter_a_mnemonic_to_ensure_that_the_mnemonic_is_correct',
  PLEASE_SET_WALLET_PASSWORD_INFO = 'please_set_your_wallet_password',
  PLEASE_SWITCH_NETWORK = 'walletCreateNetTypeRemind',
  PRIVATE_KEY_INVALID_ERROR = 'PRIVATE_KEY_INVALID_ERROR',
  PUBLIC_KEY_INVALID = 'public_key_invalid',
  QR_GENERATION_ERROR = 'QR_code_generation_failed',
  REFRESH_TOO_FAST_WARNING = 'refresh_too_fast_warning',
  REMOTE_ACCOUNT_NOT_FOUND = 'Cannot find your remote account, please try to unlink it and create a new one',
  ROOT_NAMESPACE_TOO_LONG_ERROR = 'The_root_namespace_cannot_be_longer_than_16',
  SEED_WALLET_OVERFLOW_ERROR = 'seed_wallet_can_not_be_more_than_10',
  SUB_NAMESPACE_LENGTH_LONGER_THAN_64_ERROR = 'The_sub_namespace_cannot_be_longer_than_16',
  SUCCESS = 'success',
  SUPPLY_LESS_THAN_0_ERROR = 'supply_can_not_less_than_0',
  UPDATE_SUCCESS = 'update_completed',
  USER_ABORTED_TX_CONFIRMATION = 'User_aborted_transaction_confirmation',
  VALUE_TOO_BIG = 'value_too_big',
  WALLET_NAME_INPUT_ERROR = 'walletCreateWalletNameRemind',
  WRONG_PASSWORD_ERROR = 'password_error',
  WRONG_WALLET_NAME_ERROR = 'wrong_wallet_name_error',
  SET_DEFAULT_EXPLORER ='set_default_explorer',
  PASSWORD_IS_INVALID_ERROR ='password_is_invalid',
  REMOTE_PUBLIC_KEY_MISSING = 'remote_public_key_missing_error',
  COSIGNATURE_ADDED = 'cosignature_added',
  ERROR_WALLET_NAME_ALREADY_EXISTS = 'error_wallet_name_already_exists',
  SUCCESS_ACCOUNT_UNLOCKED = 'success_account_unlocked'
}
