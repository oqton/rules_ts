import { Md5 } from 'ts-md5';

export function hashString(s: string) {
    return Md5.hashStr(s);
}
