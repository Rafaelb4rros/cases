function _DATABASE() {
    const db: Record<number, string[]> = {};


    const sort = () => {
        let result: Record<number, string[]> = {};
        const kSorted = Object.keys(db).sort();
        for(let i = 0; i < kSorted.length; ++i) {
            result[Number(kSorted[i])] = new Proxy(db[Number(kSorted[i])].sort(), {
                set: () => {
                        return true
                    },
            }); 
        };

        return result;
    };
    
    const _set = (grade: number, name: string) => {
        for(const key in db) {
            if(db[key].some(n => n === name)) {
                db[key] = db[key].filter(n => n !== name);
            };
        };

        if(!db[grade]) {
            db[grade] = [name];
        } else {
            db[grade] = [...db[grade], name];
        };
    };


    const get = () => sort()

    return {
        _set,
        get
    };
};

export class GradeSchool {
    private _database = _DATABASE();

  roster() {
      return this._database.get();
  }

  add(name: string, grade: number) {
      this._database._set(grade, name);
  }

  grade(grade: number) {
    return this._database.get()[grade] ?? [];
  }
}
