import React from 'react'
// import styled from 'styled-components'
import { PageContainer, PageContent, PageTitle, PageParag } from '../../styles/styles-page'

import PageLayout from '../../components/layouts/PageLayout'
import HeroDebtPage from '../../components/banners/HeroDebtPage'
import GetStartedMenu from '../../components/menus/GetStartedMenu'

const GetStartedPage = () => (
  <PageLayout>
    <HeroDebtPage />
    <GetStartedMenu />
    <PageContainer>
      <PageContent>
        <PageTitle>Put Your Page Title Here</PageTitle>
        <PageParag>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu egestas magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Curabitur ornare orci vehicula erat scelerisque, vel molestie nisl commodo. Phasellus eu orci aliquam, rutrum ex bibendum, feugiat neque. Nunc ultrices fermentum dapibus. Suspendisse sit amet leo vulputate, luctus mi ac, bibendum dolor. Praesent accumsan rhoncus iaculis. Duis blandit, purus nec consectetur ultricies, dolor justo laoreet risus, non ornare neque sapien vel sem. Mauris quis consectetur arcu. Nam ultricies diam a nisi consequat convallis. Nunc aliquam, neque vitae vehicula molestie, dui mauris accumsan dolor, eu blandit tellus tortor ac mauris.</PageParag>
        <PageParag>Integer eget tellus massa. Mauris sollicitudin ex sit amet libero faucibus ornare. Sed in ultricies risus, in rhoncus arcu. Integer tincidunt quis erat ullamcorper facilisis. Nam sit amet dolor elementum arcu tristique facilisis. Etiam euismod mi ut elit pulvinar, luctus pellentesque mi luctus. Sed imperdiet vestibulum libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque aliquam auctor eros. Nulla volutpat sem in aliquam tincidunt. Nulla tincidunt arcu et nunc varius elementum id in eros. Aenean cursus metus elit, sed placerat lacus dapibus id. Pellentesque at purus magna. Sed pharetra, leo ac ornare cursus, augue est scelerisque justo, ac consectetur diam tortor eu libero. Suspendisse sed sagittis nibh. Cras luctus iaculis ante ut laoreet.</PageParag>
      </PageContent>  
    </PageContainer>
  </PageLayout>
)

export default GetStartedPage
