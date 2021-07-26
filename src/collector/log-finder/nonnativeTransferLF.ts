import { createReturningLogFinder, ReturningLogFinderMapper } from '@terra-money/log-finder'
import { NonnativeTransferTransformed } from 'types'
import * as logRules from './log-rules'

export function createNonnativeTransferLogFinders(): ReturningLogFinderMapper<NonnativeTransferTransformed>[] {
  return [
    createReturningLogFinder(logRules.nonnativeTransferRule(), (_, match) => {
      return {
        addresses: {
          from: match[2].value,
          to: match[3].value,
        },
        assets: {
          token: match[0].value,
          amount: match[4].value,
        },
      }
    }),
    createReturningLogFinder(logRules.nonnativeTransferRuleFrom(), (_, match) => {
      return {
        addresses: {
          from: match[2].value,
          to: match[3].value,
        },
        assets: {
          token: match[0].value,
          amount: match[5].value,
        },
      }
    }),
    createReturningLogFinder(logRules.nonnativeSendRuleFrom(), (_, match) => {
      return {
        addresses: {
          from: match[2].value,
          to: match[3].value,
        },
        assets: {
          token: match[0].value,
          amount: match[5].value,
        },
      }
    }),
    createReturningLogFinder(logRules.nonnativeSendRule(), (_, match) => {
      return {
        addresses: {
          from: match[2].value,
          to: match[3].value,
        },
        assets: {
          token: match[0].value,
          amount: match[4].value,
        },
      }
    }),
  ]
}