import React, {useState, useEffect} from 'react';
import { MdInfoOutline } from 'react-icons/md';
import styled from "styled-components";
import Pagination from './Pagination';

const UserTabs = (id) => {
    const [courses, setCourses] = useState()

    useEffect(() => {
        fetch(`/course/courses-owner/${id.id.id}`).
        then(data => data.json()).
        then(data => setCourses(data));
      }, [])

  return (
    <UserTabsWrapper>
      {courses?.length > 0 ? (
          <Pagination
            data={courses}
            pageLimit={5}
            dataLimit={3}
          />
          ) : (
            <p className='not-uploaded'><MdInfoOutline/>This user has not uploaded any course yet.</p>
      )}
      <div className='mt-4'/>
    </UserTabsWrapper>

  )
}

const UserTabsWrapper = styled.div`
  .tabs{
    margin-top: 16px;

    .tabs-head-item button{
      border: 1px solid rgba(0, 0, 0, 0.7);
      padding: 10px 13px;
      margin-right: 6px;
      transition: var(--transition);
      font-weight: 500;
      font-size: 15px;
      margin-bottom: 10px;
      
      &:hover{
        background-color: var(--clr-black);
        color: var(--clr-white);
      }
    }

    .tabs-body{
      margin-top: 32px;
      
    }

    @media screen and (min-width: 600px){
      .tabs-body{
        display: grid;
        gap: 26px;
        grid-template-columns: repeat(1, 1fr);
      }
    }

    @media screen and (min-width: 992px){
      .tabs-body{
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media screen and (min-width: 1400px){
      .tabs-body{
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
`;

export default UserTabs