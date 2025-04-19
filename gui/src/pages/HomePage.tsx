import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid } from 'semantic-ui-react'
import { LogoContainer } from '../components/LogoContainer'
import { MicrolabStatusResponse } from '../microlabTypes'
import { useTranslation } from 'react-i18next'

import './HomePage.scss'

export function HomePage(props: { status: MicrolabStatusResponse }) {
  const { t } = useTranslation()
  const { status } = props

  return (
    <div className="home-page page row">
        <Grid style={{ height: '100%' }} stackable>
        <Grid.Row columns={2} style={{ height: '100%' }}>
          <Grid.Column style={{ height: '100%' }} width={8}>
          <p>{t('Four Thieves Vinegar MicroLab')}</p>
          <LogoContainer/>
          </Grid.Column>
          <Grid.Column className="d-flex flex-column justify-content-center"  width={8}>
            <div className="button-list">
              {status && status.recipe ? (
                //if there's a recipe in progress, give a link to see its status
                //if not, offer option to start reaction
                <div>
                  <p>{t('reaction-in-progress', { reactionName: status.recipe })}</p>
                  <Button color="purple" as={Link} to="/status">
                    {t('resume-reaction', { reactionName: status.recipe.toUpperCase() })}
                    {/* maybe this would be a good place to preview next step? */}
                  </Button>
                  <Button as={Link} to="/recipes">
                    {t('view-recipes-button-text')}
                  </Button>
                </div>
              ) : (
                <Button color="purple" as={Link} to="/recipes">
                  {t('view-recipes-button-text')}
                </Button>
              )}
            </div>
          </Grid.Column>
        </Grid.Row>
        
      </Grid>
      </div>
  )
}
