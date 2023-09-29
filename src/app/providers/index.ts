import { withRouter } from './withRouter'
import { withStore } from './withStore'
import { withStyles } from './withStyles'
import compose from '../../shared/utils/compose'

export const withProviders = compose(withRouter, withStore, withStyles)
