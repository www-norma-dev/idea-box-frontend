import React , { useState} from 'react'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import { useTranslation } from 'react-i18next';


export default function  Copyright () {
  const { t, i18n } = useTranslation();
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        {t('Idea Box')}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}


