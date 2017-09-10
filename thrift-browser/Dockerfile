FROM ubuntu:17.04

RUN mkdir -p /home/app

WORKDIR /home/app

COPY . /home/app

RUN apt-get update -y
RUN apt-get install -y build-essential python unzip wget vim
# nodejs
RUN wget https://codeload.github.com/nodejs/node/zip/v8.1.4 --no-check-certificate
RUN unzip v8.1.4
RUN cd node-8.1.4 && ./configure && make && make install
RUN rm v8.1.4
RUN rm -r node-8.1.4

RUN npm i

# thrift

ENV THRIFT_VERSION 0.10.0

RUN buildDeps=" \
  automake \
  bison \
  curl \
  flex \
  g++ \
  libboost-dev \
  libboost-filesystem-dev \
  libboost-program-options-dev \
  libboost-system-dev \
  libboost-test-dev \
  libevent-dev \
  libssl-dev \
  libtool \
  make \
  pkg-config \
  "; \
  apt-get update && apt-get install -y --no-install-recommends $buildDeps && rm -rf /var/lib/apt/lists/* \
  && curl -sSL "http://apache.mirrors.spacedump.net/thrift/$THRIFT_VERSION/thrift-$THRIFT_VERSION.tar.gz" -o thrift.tar.gz \
  && mkdir -p /usr/src/thrift \
  && tar zxf thrift.tar.gz -C /usr/src/thrift --strip-components=1 \
  && rm thrift.tar.gz \
  && cd /usr/src/thrift \
  && ./configure  --without-python --without-cpp \
  && make \
  && make install \
  && cd / \
  && rm -rf /usr/src/thrift \
  && curl -k -sSL "https://storage.googleapis.com/golang/go1.4.linux-amd64.tar.gz" -o go.tar.gz \
  && tar xzf go.tar.gz \
  && rm go.tar.gz \
  && cp go/bin/gofmt /usr/bin/gofmt \
  && rm -rf go \
  && apt-get purge -y --auto-remove $buildDeps

EXPOSE 3003

CMD ["bash"]
