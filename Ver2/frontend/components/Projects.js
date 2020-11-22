import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LinkOutlined, GithubOutlined } from '@ant-design/icons';
const ProjectItem = styled.div`
    display: flex;
    line-height: 1.5;
`
const ProjectLeftWrap = styled.div`
    margin-right: 30px;
    display: block;
`

const ProjectRightWrap = styled.div`
    flex-grow: 1;
    display: block;
`
const ProjectImg = styled.img`
    flex-shrink: 1;
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 24px;
    border: 1px solid #ddd;
    src: url(${props => props.src});
    alt="통전열융착기 이미지"
`
const ProjectTitle = styled.div`
    display: flex;
    margin: 8px 0;
    align-items: center;
`
const ProjectTitleText = styled.div`
    font-size: 28px;
    margin: 0;
    font-weight: 700;
    line-height: 1.2;
`
const ProjectSubTitle = styled.p`
    color: #606dbb;
    font-weight: 700;
    margin: 0;
`

const ProjectText = styled.div`
    color: #222;
    font-size: 17px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`
const ProjectTags = styled.p`
    color: #009688;
    margin-bottom: 30px;
    font-size: 15px;
    font-weight: 600;
    font-style: italic;
`
const ProjectLink = styled.div`
    display: flex;
    align-items: center;
`
const ProjectLinkHref = styled.a`
    color: #1e88e5;
    font-weight: 700;
    text-decoration: none;
    padding: 2px 0;
    font-size: 18px;
    margin: 4px 0;
    border-bottom: 1px dotted #ccc;
`
const Projects = ({ title, subTitle, text, tags, imgURL, linkURL, linkText, linkURLGit, linkTextGit }) => {
  return (
  <ProjectItem>
    <ProjectLeftWrap>
      <ProjectImg src={imgURL} />
    </ProjectLeftWrap>
    <ProjectRightWrap>
      <ProjectTitle>
        <ProjectTitleText>{title}</ProjectTitleText>
      </ProjectTitle>
      <ProjectSubTitle>{subTitle}</ProjectSubTitle>
      <ProjectText>{text}</ProjectText>
      <ProjectTags>{tags}</ProjectTags>
      {linkURL && 
      <ProjectLink>
        <LinkOutlined style={{fontSize:'20px' , marginRight:'8px'}} />
        <ProjectLinkHref href={linkURL}>{linkText}</ProjectLinkHref>
      </ProjectLink>
      }
      {linkURLGit &&
      <ProjectLink>
        <GithubOutlined style={{fontSize:'20px' , marginRight:'8px'}} />
        <ProjectLinkHref href={linkURLGit}>{linkTextGit}</ProjectLinkHref>
      </ProjectLink>
      }
    </ProjectRightWrap>
  </ProjectItem>
  );
};

Projects.propTypes = {
  title :PropTypes.string.isRequired,
  subTitle :PropTypes.string.isRequired,
  text :PropTypes.string.isRequired,
  tags :PropTypes.string.isRequired,
  imgURL :PropTypes.string.isRequired,
  linkURL :PropTypes.string.isRequired,
  linkText :PropTypes.string.isRequired,
  linkURLGit :PropTypes.string.isRequired,
  linkTextGit :PropTypes.string.isRequired,
};

export default Projects;