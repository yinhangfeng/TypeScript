function test1(x: number, { aaa, bbb, ccc }: { aaa: number; bbb: boolean; ccc: string }) {
  console.log(arguments[0]);
  return aaa;
}

test1(1, {
  aaa: 1,
  bbb: true,
  ccc: 'ccc',
});

enum UserResponse {
  No,
  Yes,
  Xxx = 'xx',
}

let a: number = UserResponse.No;
let xxx = UserResponse.Xxx;

interface Obj1 {
  aaa: number;
  bbb: string;
}

type Obj2 = Partial<Obj1>;

let obj1: Obj1 = {
  aaa: 1,
  bbb: 'bbb',
};

function func1(param: Obj1) {
  let a: any = param;

  let b: Record<string, any> = param;


}

function func2({aaa = 1, bbb = 'bbb', ...rest}: {aaa?: number, bbb?: string} = {}) {

}

function func3({aaa, bbb, xxx, ...otherProps}: {aaa: number; bbb?: string; ccc: number; xxx: number; }) {
  // delete otherProps.ccc;

  otherProps.ccc = 1;

  return {
    aaa,
    bbb,
    xxx: 1,
    ...otherProps,
  };
}

func1(obj1);

class Cls1 {
  aaa(a: number): number {
    return 1;
  }
}

class Cls2 extends Cls1 {
  aaa(a: number): number {
    return 1;
  }
}
