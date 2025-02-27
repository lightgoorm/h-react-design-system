# h-react-design-system

`h-react-design-system`은 React 환경에서 사용할 수 있는 유연한 디자인 시스템입니다. 이 프로젝트는 JavaScript와 TypeScript에서 모두 사용할 수 있으며, 다양한 빌드 시스템을 지원하는 **ESM**과 **CommonJS** 모듈을 제공합니다. `class` 기반의 스타일링과 `styled-components` 스타일링을 모두 적용할 수 있어, 개발자가 원하는 스타일링 방법을 자유롭게 선택할 수 있습니다.

나만의 디자인 시스템을 만드는 것을 목적으로 하고 있습니다.

### 브랜치 태크에 따라서 모노레포 구성과정을 확인 할 수 있습니다.

## 주요 기능

- **React 환경 지원**: React 컴포넌트와 함께 사용할 수 있는 디자인 시스템.
- **스타일링 방법 선택 가능**: `class` 기반 스타일링과 `styled-components` 스타일링을 모두 지원.
- **모듈 시스템**: `ESM`과 `CommonJS` 두 가지 모듈 시스템을 지원하여 다양한 환경에서 사용 가능.
- **JavaScript & TypeScript 지원**: JS와 TS 환경에서 모두 동작하도록 설계.

## 설치

```bash
npm install h-react-design-system


사용법
React 컴포넌트 사용 예시

```
import { Button } from 'h-react-design-system';

function App() {
return (
<div>
<Button>Click Me</Button>
</div>
);
}
```

# 빌드 및 배포
## ESM 및 CommonJS 빌드

- h-react-design-system은 ESM과 CommonJS 모듈을 모두 지원하므로, 프로젝트의 요구 사항에 맞는 모듈 시스템을 선택하여 사용할 수 있습니다.

- ESM (ECMAScript 모듈): 최신 JavaScript 표준을 따르는 모듈 시스템.
- CommonJS: 기존의 Node.js 모듈 시스템을 따릅니다.