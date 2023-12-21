// 예시로 가상의 사용자 아이디 배열을 만들어 사용합니다.
const onlineUsers = ['박지응', '전예은', '고성원', '임나히', '채형원'];

// 페이지가 로드되면 실행되는 함수
document.addEventListener('DOMContentLoaded', () => {
  const onlineUsersList = document.getElementById('online-users');

  // 가상의 사용자 아이디 배열을 기반으로 동적으로 목록을 생성합니다.
  onlineUsers.forEach(user => {
    const listItem = document.createElement('li');
    listItem.textContent = user;
    onlineUsersList.appendChild(listItem);
  });
});