import React, { useEffect } from 'react'

const useOnClickOutside = (ref, handler) => {// 컴포넌트가 마운트되거나 ref와 handler가 업데이트 될 때마다 실행됩니다.
    useEffect(() => {
        const listener = (event) =>{//리스너
            console.log('ref', ref.current) //ref.current에 현재 뭐가 있는지 확인.
            if(!ref.current || ref.current.contains(event.target)) { //모달 창 안을 클릭하면,
                return; //return으로 끝냄
            }
            handler(); // 모달 창 바깥이라면 handler를 호출해서, MovieModal/index.js에서 
            //useOnClickOutside(ref, () => {setModalOpen(false)}); 이걸 작동시킴
        }; 

        document.addEventListener("mousedown", listener) //mousedown이벤트가 발생했을 때, listener을 호출해준다.
        document.addEventListener("touchstart", listener)//touchstart이벤트가 발생했을 때, listener을 호출해준다.
        return () => {
            document.addEventListener("mousedown", listener)//컴포넌트가 언마운트되면 listener를 없애줘야 한다.
            document.addEventListener("touchstart", listener)//컴포넌트가 언마운트되면 listener를 없애줘야 한다.
        };
    }, []);
};

export default useOnClickOutside; // useOnClickOutside 커스텀 훅을 내보냅니다.